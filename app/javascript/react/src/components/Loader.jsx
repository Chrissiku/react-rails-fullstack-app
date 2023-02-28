import React from "react";

const Loader = (props) => {
  return (
    <div className="text-center mt-5">
      {!props.isShowLoader ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Loader;
