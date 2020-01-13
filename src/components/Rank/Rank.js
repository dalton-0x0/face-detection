import React from "react";
const Fragment = React.Fragment;

const Rank = ({ name, entries }) => {
  return (
    <Fragment>
      <div className="f2 white">{`Hello ${name}! Your current image entry count is:`}</div>
      <div className="f1 white">{`${entries}`}</div>
    </Fragment>
  );
};

export default Rank;
