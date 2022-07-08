import React, { useState } from "react";
import "./styles.css";
import Home from "../src/components/Home";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Get Ready to complete your daily goals
      </h1>
      <Home />
    </div>
  );
};

export default App;
