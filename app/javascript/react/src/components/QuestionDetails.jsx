import React, { Component, useState } from "react";
import { URL } from "./utils/constants";

// const QuestionDetails = (props) => {
//   const [likeCount, setLikeCount] = useState(0);

//   return (
//     <div className="card rounded-0 mt-3">
//       <div className="card-body">
//         <h3 className="card-title">{props.question.title}</h3>
//         <p className="lead">
//           <span className="badge bg-primary">{props.question.tag}</span>
//         </p>
//         <button
//           type="button"
//           className="btn btn-primary mt-1"
//           onClick={() => setLikeCount(likeCount + 1)}
//         >
//           Like
//         </button>
//         <button
//           type="button"
//           className="btn btn-primary mt-1"
//           onClick={() => setLikeCount(likeCount - 1)}
//         >
//           DisLike
//         </button>
//         {likeCount > 0 ? (
//           <span className="ms-2 badge bg-primary">{likeCount}</span>
//         ) : (
//           <span className="ms-2 badge bg-primary">{likeCount}</span>
//         )}
//       </div>
//     </div>
//   );
// };
class QuestionDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: this.props.question.likes_count,
      dislikeCount: this.props.question.dislikes_count,
    };
    this.updateLikeCounter = this.updateLikeCounter.bind(this);
    this.updateDisLikeCounter = this.updateDisLikeCounter.bind(this);
  }

  updateLikeCounter() {
    this.setState(function (state) {
      return { likeCount: state.likeCount + 1 };
    });
    this.updateQuestionCounter({ count_for: "like" });
  }

  updateDisLikeCounter() {
    this.setState(function (state) {
      return { dislikeCount: state.dislikeCount + 1 };
    });
    this.updateQuestionCounter({ count_for: "dislike" });
  }

  updateQuestionCounter = (data) => {
    fetch(`${URL}/${this.props.question.id}/update_counter`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="card rounded-0 mt-3">
        <div className="card-body">
          <h3 className="card-title">{this.props.question.title}</h3>
          <p className="lead">
            <span className="badge bg-primary">{this.props.question.tag}</span>
          </p>

          <button
            type="button"
            className="btn btn-sm btn-primary position-relative me-3"
            onClick={this.updateLikeCounter}
          >
            Like
            {this.state.likeCount > 0 ? (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {this.state.likeCount}
              </span>
            ) : (
              ""
            )}
          </button>

          <button
            type="button"
            className="btn btn-sm btn-warning position-relative"
            onClick={this.updateDisLikeCounter}
          >
            DisLike
            {this.state.dislikeCount > 0 ? (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {this.state.dislikeCount}
              </span>
            ) : (
              ""
            )}
          </button>
        </div>
      </div>
    );
  }
}

export default QuestionDetails;
