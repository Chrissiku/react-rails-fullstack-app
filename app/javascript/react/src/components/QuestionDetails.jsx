import React, { useState } from "react";

const QuestionDetails = (props) => {
  const [likeCount, setLikeCount] = useState(0);

  return (
    <div className="card rounded-0 mt-3">
      <div className="card-body">
        <h3 className="card-title">{props.question.title}</h3>
        <p className="lead">
          <span className="badge bg-primary">{props.question.tag}</span>
        </p>
        <button
          type="button"
          className="btn btn-primary mt-1"
          onClick={() => setLikeCount(likeCount + 1)}
        >
          Like
        </button>
        <button
          type="button"
          className="btn btn-primary mt-1"
          onClick={() => setLikeCount(likeCount - 1)}
        >
          DisLike
        </button>
        {likeCount > 0 ? (
          <span className="ms-2 badge bg-primary">{likeCount}</span>
        ) : (
          <span className="ms-2 badge bg-primary">{likeCount}</span>
        )}
      </div>
    </div>
  );
};

export default QuestionDetails;
