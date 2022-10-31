import React from "react";
import "./FlexWrapper.css";
/*
function FlexWrapper(props) {
  let classnames = `flexWrapper ${props.columns ? "fxRow" : "fxCol"}`;
  return <div className={classnames}>{props.children}</div>;
}*/

function FlexWrapper(props) {
  return <div className="flex">{props.children}</div>;
}

export default FlexWrapper;