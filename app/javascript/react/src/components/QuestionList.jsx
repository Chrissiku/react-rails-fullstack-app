import * as React from "react";
import * as ReactDom from "react-dom";

const QuestionList = () => {
  const questions = [
    { title: "How to check if a key is present in a Hash?", tag: "Ruby" },
    {
      title: "What is the difference between strings and symbols?",
      tag: "Ruby",
    },
    { title: "What happened if you add two same key Hash?", tag: "Ruby" },
    { title: "How to delete a given key from a Hash?", tag: "Ruby" },
    { title: "How to check if two Hashes are identical?", tag: "Ruby" },
    { title: "How to combine two Hashes in Ruby?", tag: "Ruby" },
    { title: "How to get unique keys from two Hashes in Ruby?", tag: "Ruby" },
    {
      title: "What does the Hash? key member ? and include method in a Hash",
      tag: "Ruby",
    },
    { title: "What are blocks in Ruby?", tag: "Ruby" },
    { title: "Does the order of hashes matter in Ruby?", tag: "Ruby" },
  ];
  return (
    <div className="row">
      <div className="col-lg-10 mx-auto">
        {questions.map((question, index) => (
          <div className="card rounded-0 mt-3" key={index}>
            <div className="card-body">
              <h3 className="card-title">{question.title}</h3>
              <p className="lead">
                <span className="badge bg-primary">{question.tag}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
