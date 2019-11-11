import React, { Component } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { Logo } from "./components/Logo/Logo";
import { Rank } from "./components/Rank/Rank";
import { ImageLinkForm } from "./components/ImageLinkForm/ImageLinkForm";
import { FaceRecognition } from "./components/FaceRecognition/FaceRecognition";
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
			imageUrl: ""
		};
	}

	onInputChange = e => {
		console.log(e.target.value);
		this.setState({ userInput: e.target.value });
	};

	onButtonSubmit = e => {
		console.log("click");
		this.setState({ imageUrl: this.state.userInput });
		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.userInput).then(
			function(response) {
				// do something with response
				console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
			},
			function(err) {
				// there was an error
			}
		);
	};

	render() {
		return (
			<Fragment>
				<div className="App">
					<Particles className="particles" params={particlesOptions} />
					<Navigation />
					<Logo />
					<Rank />
					<ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
					<FaceRecognition imageUrl={this.state.imageUrl} />
				</div>
			</Fragment>
		);
	}
}

export default App;
