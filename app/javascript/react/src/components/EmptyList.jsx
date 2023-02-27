import React from "react";

const EmptyList = (props) => {
  return (
    <div>
      <div className="text-center alert alert-danger  mt-5" role="alert">
        <strong>Oops!</strong> No Questions found with the tag:{" "}
        <strong>{props.tagName}</strong>. Please select another option form the
        list
      </div>
    </div>
  );
};

export default EmptyList;
