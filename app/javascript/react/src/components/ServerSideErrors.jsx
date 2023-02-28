import React from "react";

const ServerSideErrors = (props) => {
  return (
    <>
      <p className="lead fw-bold">Please Check the following errors!</p>
      {props.errors.map((error, index) => (
        <p className="text-danger text-center" key={index}>
          {error}
        </p>
      ))}
    </>
  );
};

export default ServerSideErrors;
