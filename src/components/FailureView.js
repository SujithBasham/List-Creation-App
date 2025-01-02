import React from "react";

const FailureView = ({ retryFunction }) => (
  <div className="failure-view">
    <p>Something went wrong!</p>
    <button onClick={retryFunction}>Try Again</button>
  </div>
);

export default FailureView;
