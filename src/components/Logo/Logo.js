import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain_logo from "./Logo.png";
const Fragment = React.Fragment;

export const Logo = () => {
	return (
		<Fragment>
			<div className="ma4 mt0">
				<Tilt className="Tilt br3 shadow-5 pa2" options={{ max: 55 }} style={{ height: 250, width: 250 }}>
					<div className="Tilt-inner">
						{" "}
						<img style={{ paddingTop: "5px" }} alt="logo" src={brain_logo} />
					</div>
				</Tilt>
			</div>
		</Fragment>
	);
};
