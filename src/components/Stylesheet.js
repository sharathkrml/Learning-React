import React from "react";
import classNames from "classnames";
import "./myStyles.css";
function Stylesheet({ primary }) {
  let className = primary ? "primary" : "";
  let classes = classNames(className,'font-xl')
  return (
    <div>
      {/* <h1 className={className}>Stylesheets</h1> */}
      {/* using template literals for multiple class names or use librarie called Classnames */}
      {/* <h1 className={`${className} font-xl`}>Stylesheets</h1> */}

      <h1 className={classes}>Stylesheets</h1>
    </div>
  );
}
export default Stylesheet;
