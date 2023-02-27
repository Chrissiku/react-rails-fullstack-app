import * as React from "react";
import * as ReactDom from "react-dom";

const QuestionList = () => {
  const questions = [
    {
      id: 1,
      title: "How to check if a key is present in a Hash?",
      tag: "Ruby",
    },
    {
      id: 2,
      title: "What is the difference between strings and symbols?",
      tag: "Ruby",
    },
    {
      id: 3,
      title: "What happened if you add two same key Hash?",
      tag: "Ruby",
    },
    { id: 4, title: "How to delete a given key from a Hash?", tag: "Ruby" },
    { id: 5, title: "How to check if two Hashes are identical?", tag: "Ruby" },
    { id: 6, title: "How to combine two Hashes in Ruby?", tag: "Ruby" },
    {
      id: 7,
      title: "How to get unique keys from two Hashes in Ruby?",
      tag: "Ruby",
    },
    {
      id: 8,
      title: "What does the Hash? key member ? and include method in a Hash",
      tag: "Ruby",
    },
    { id: 9, title: "What are blocks in Ruby?", tag: "Ruby" },
    { id: 10, title: "Does the order of hashes matter in Ruby?", tag: "Ruby" },
  ];
  return (
    <div className="row">
      <div className="col-lg-10 mx-auto">
        {questions.map((question) => (
          <div className="card rounded-0 mt-3" key={question.id}>
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
