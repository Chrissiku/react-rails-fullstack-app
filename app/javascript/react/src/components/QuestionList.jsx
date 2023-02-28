import React, { useState, useEffect } from "react";
import QuestionDetails from "./QuestionDetails";
import { URL } from "./utils/constants";
import EmptyList from "./EmptyList";
import Loader from "./Loader";

const QuestionList = () => {
  const questionsTags = [
    { label: "All", value: 0 },
    { label: "Ruby", value: 1 },
    { label: "Rails", value: 2 },
    { label: "Rails", value: 3 },
    { label: "Bootstrap", value: 4 },
    { label: "JavaScript", value: 5 },
  ];

  const [questionsList, setQuestionsList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(questionsTags[0].value);
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [isShowLoader, setIsShowLoader] = useState(true);

  const fetchQuestionsList = () => {
    setIsShowLoader(false);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setQuestionsList(data);
        if (data.length === 0) {
          setIsShowAlert(true);
          setIsShowLoader(true);
        } else {
          setIsShowAlert(false);
        }
      });
  };

  useEffect(() => {
    fetchQuestionsList();
  }, []);

  const updateSelectedItem = (event) => {
    setIsShowLoader(false);
    setIsShowAlert(false);
    setQuestionsList([]);
    setSelectedOption(event.target.value);
    fetch(URL + `?tags=${questionsTags[event.target.value].label}`)
      .then((response) => response.json())
      .then((data) => {
        setQuestionsList(data);
        if (data.length === 0) {
          setIsShowAlert(true);
          setIsShowLoader(true);
        }
      });
  };

  // const questions = [
  //   {
  //     id: 1,
  //     title: "How to check if a key is present in a Hash?",
  //     tag: "Ruby",
  //   },
  //   {
  //     id: 2,
  //     title: "What is the difference between strings and symbols?",
  //     tag: "Ruby",
  //   },
  //   {
  //     id: 3,
  //     title: "What happened if you add two same key Hash?",
  //     tag: "Ruby",
  //   },
  //   { id: 4, title: "How to delete a given key from a Hash?", tag: "Ruby" },
  //   { id: 5, title: "How to check if two Hashes are identical?", tag: "Ruby" },
  //   { id: 6, title: "How to combine two Hashes in Ruby?", tag: "Ruby" },
  //   {
  //     id: 7,
  //     title: "How to get unique keys from two Hashes in Ruby?",
  //     tag: "Ruby",
  //   },
  //   {
  //     id: 8,
  //     title: "What does the Hash? key member ? and include method in a Hash",
  //     tag: "Ruby",
  //   },
  //   { id: 9, title: "What are blocks in Ruby?", tag: "Ruby" },
  //   { id: 10, title: "Does the order of hashes matter in Ruby?", tag: "Ruby" },
  // ];

  return (
    <div className="row">
      <div className="col-lg-10 mx-auto">
        <p className="lead fw-bold">Filter question by Tags</p>
        <select
          className="form-select form-select-lg"
          value={selectedOption}
          onChange={(event) => updateSelectedItem(event)}
        >
          {questionsTags.map((tag) => (
            <option key={tag.value} value={tag.value}>
              {tag.label}
            </option>
          ))}
        </select>
        {questionsList.length > 0 ? (
          questionsList.map((question) => (
            <QuestionDetails question={question} key={question.id} />
          ))
        ) : (
          <Loader isShowLoader={isShowLoader} />
        )}
        {isShowAlert && (
          <EmptyList tagName={questionsTags[selectedOption].label} />
        )}
      </div>
    </div>
  );
};

export default QuestionList;
