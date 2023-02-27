import * as React from "react";
import * as ReactDom from "react-dom";

const Welcome = () => {
  return (
    <div className="container">
      <h1>Welcome to my fullstack project</h1>
      <p>Welcome to my fullstack project</p>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<Welcome />, document.getElementById("welcome"));
});

export default Welcome;
