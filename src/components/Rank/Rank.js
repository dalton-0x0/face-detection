import React from "react";
const Fragment = React.Fragment;

const Rank = ({ name, entries }) => {
  return (
    <Fragment>
      <div className="f2 yellow">{`Hello ${name}! Your current image entry count is:`}</div>
      <div className="f1 yellow">{`${entries}`}</div>
    </Fragment>
  );
};

export default Rank;
