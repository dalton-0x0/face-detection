import React, { Component } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { Logo } from "./components/Logo/Logo";
import { Rank } from "./components/Rank/Rank";
import { ImageLinkForm } from "./components/ImageLinkForm/ImageLinkForm";
import Particles from "react-particles-js";

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
	render() {
		return (
			<Fragment>
				<div className="App">
					<Particles className="particles" params={particlesOptions} />
					<Navigation />
					<Logo />
					<Rank />
					<ImageLinkForm />
					{/* 
					<FaceRecognition />} */}
				</div>
			</Fragment>
		);
	}
}

export default App;
