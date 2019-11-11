import React from "react";
const Fragment = React.Fragment;

export const Navigation = () => {
	return (
		<Fragment>
			<nav style={{ display: "flex", justifyContent: "flex-end" }}>
				<p className="f3 dim white pa2 pointer link underline">Sign Out</p>
			</nav>
		</Fragment>
	);
};
