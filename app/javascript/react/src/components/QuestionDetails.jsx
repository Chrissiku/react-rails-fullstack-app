import * as React from "react";
import * as ReactDom from "react-dom";

const QuestionDetails = (props) => {
  return (
    <div className="card rounded-0 mt-3">
      <div className="card-body">
        <h3 className="card-title">{props.question.title}</h3>
        <p className="lead">
          <span className="badge bg-primary">{props.question.tag}</span>
        </p>
      </div>
    </div>
  );
};

export default QuestionDetails;
