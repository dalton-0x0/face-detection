import React, { Component } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { Logo } from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import { ImageLinkForm } from "./components/ImageLinkForm/ImageLinkForm";
import { FaceRecognition } from "./components/FaceRecognition/FaceRecognition";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Particles from "react-particles-js";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "8ee434780de44825a764987fa5900c9b"
});

const Fragment = React.Fragment;
const particlesOptions = {
  Number: {
    value: 90,
    density: {
      enable: true,
      value_area: 800
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      imageUrl: "",
      faceBox: {},
      route: "signin",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: ""
      }
    };
  }
  componentDidMount() {
    this.setState({ imageUrl: "http://faces-unplugged.com/img/photo/008.jpg" });
    fetch("http://localhost:3030/").then(response =>
      response.json().then(data => console.log(data))
    );
  }

  addUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    });
  };
  calcFaceLocation = responseData => {
    const clarifaiFace =
      responseData.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(clarifaiFace);
    const image = document.getElementById("inputImage");
    const imageWidth = Number(image.width);
    const imageHeight = Number(image.height);
    console.log(imageWidth, imageHeight);
    return {
      leftCol: clarifaiFace.left_col * imageWidth,
      topRow: clarifaiFace.top_row * imageHeight,
      rightCol: imageWidth - clarifaiFace.right_col * imageWidth,
      bottomRow: imageHeight - clarifaiFace.bottom_row * imageHeight
    };
  };

  displayFaceBox = boxData => {
    console.log(boxData);
    this.setState({ faceBox: boxData });
  };

  onInputChange = e => {
    console.log(e.target.value);
    this.setState({ userInput: e.target.value });
  };

  onButtonSubmit = e => {
    console.log("detect button clicked");
    this.setState({ imageUrl: this.state.userInput });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.userInput)
      .then(response => this.displayFaceBox(this.calcFaceLocation(response)))
      .catch(error => console.log(error));
  };

  onRouteChange = route => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    return (
      <Fragment>
        <div className="App">
          <Particles className="particles" params={particlesOptions} />
          <Navigation
            isSignedIn={this.state.isSignedIn}
            onRouteChange={this.onRouteChange}
          />
          {this.state.route === "home" ? (
            <div>
              <Logo />
              <Rank
                name={this.state.user.name}
                entries={this.state.user.entries}
              />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition
                faceBox={this.state.faceBox}
                imageUrl={this.state.imageUrl}
              />
            </div>
          ) : this.state.route === "signin" ? (
            <SignIn addUser={this.addUser} onRouteChange={this.onRouteChange} />
          ) : (
            <Register
              addUser={this.addUser}
              onRouteChange={this.onRouteChange}
            />
          )}
        </div>
      </Fragment>
    );
  }
}

export default App;
