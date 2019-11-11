import React from "react";
import "./ImageLinkForm.css";
const Fragment = React.Fragment;

export const ImageLinkForm = () => {
	return (
		<Fragment>
			<div>
				<p className="f3 white">{`This app will detect the faces in your pictures!`}</p>
				<div className="center">
					<div className="form pa4 br shadow-5 center">
						<input className="f4 pa2 w-70" type="text" />
						<button className="f4 pa2 w-30 dib ph3 pv2 grow link bg-near-black white">Detect!</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
