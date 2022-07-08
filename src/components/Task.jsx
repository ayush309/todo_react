import React, { useState } from "react";

const Task = ({ title, description, index, deletetask }) => {
  return (
    <div className="task">
      <div>
        <p> {title} </p>
        <span>{description}</span>
      </div>
      <button onClick={() => deletetask(index)}>Delete </button>
    </div>
  );
};

export default Task;
