import * as React from "react";
import * as ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
import QuestionList from "./QuestionList";

const Welcome = () => {
  return (
    <div className="container">
      <QuestionList />
    </div>
  );
};

// document.addEventListener("DOMContentLoaded", () => {
//   ReactDom.render(<Welcome />, document.getElementById("welcome"));
// });

const container = document.getElementById("welcome");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
);

export default Welcome;
