import React, { useState } from "react";

const NewQuestion = () => {
  const questionsTags = [
    { label: "Ruby", value: "Ruby" },
    { label: "Rails", value: "Rails" },
    { label: "React", value: "React" },
    { label: "Bootstrap", value: "Bootstrap" },
    { label: "JavaScript", value: "javaScript" },
    { label: "Data Structure", value: "Data Structure" },
  ];

  const [formField, setFormField] = useState({
    title: "",
    tag: questionsTags[0].value,
  });

  const handleFormFields = (event) => {
    setFormField({ ...formField, [event.target.name]: event.target.value });
  };

  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    console.log(formField);
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Ask your question and help the world to grow
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleQuestionSubmit}>
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label mb-3">Title</label>
                <input
                  type="text"
                  className="form-control form-control-lg rounded-0"
                  value={formField.title}
                  onChange={(event) => handleFormFields(event)}
                  name="title"
                />
              </div>
              <div className="form-group">
                <label className="form-label mb-3">
                  Select the question tag
                </label>
                <select
                  className="form-select form-select-lg rounded-0"
                  value={formField.tag}
                  onChange={(event) => handleFormFields(event)}
                  name="tag"
                >
                  {questionsTags.map((tag, index) => (
                    <option key={index} value={tag.value}>
                      {tag.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Submit Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewQuestion;
