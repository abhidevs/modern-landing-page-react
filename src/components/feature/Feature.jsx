import React from "react";
import "./feature.css";

const Feature = ({ title, desc }) => {
  return (
    <div className="feature">
      <div className="feature-title">
        <div />
        <h1>{title}</h1>
      </div>

      <div className="feature-text">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Feature;
