import React from "react";
import "./ImageLinkForm.css";
const Fragment = React.Fragment;

export const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <Fragment>
      <div>
        <p>
          <span className="f4 white">Enter image url below e.g: </span>
          <span className="f4 gray">{`https://image-url.com/image.jpg`}</span>
        </p>
        <p className="f5 white">Detects only one face if more &#128522;</p>
        <div className="center">
          <div className="form pa4 br shadow-5 center">
            <input
              className="f4 pa2 w-70"
              type="text"
              onChange={onInputChange}
            />
            <button
              className="f4 pa2 w-30 dib ph3 pv2 grow link bg-gray white"
              onClick={onButtonSubmit}
            >
              Detect!
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
