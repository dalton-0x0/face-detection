import React from "react";
import "./FaceRecognition.css";
const Fragment = React.Fragment;

export const FaceRecognition = ({ imageUrl }) => {
	return (
		<Fragment>
			<div>
				<div className="center ma">
					<div className="mt4 absolute">
						<img alt="faces" src={imageUrl} width="550px" height="auto" />
					</div>
				</div>
			</div>
		</Fragment>
	);
};
