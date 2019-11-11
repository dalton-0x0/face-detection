import React from "react";
import "./FaceRecognition.css";
const Fragment = React.Fragment;

export const FaceRecognition = ({ imageUrl, faceBox }) => {
	return (
		<Fragment>
			<div>
				<div className="center ma">
					<div className="mt4 absolute">
						<img id="inputImage" alt="faces" src={imageUrl} width="550px" height="auto" />
						<div
							className="bounding-box"
							style={{ top: faceBox.topRow, right: faceBox.rightCol, bottom: faceBox.bottomRow, left: faceBox.leftCol }}
						></div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
