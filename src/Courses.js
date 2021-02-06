import React from "react";
import "./Courses.css";

function Courses({ backgroundImg, title, hours, level }) {
  return (
    <div
      className="courses"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="top_part">
        <p className="level">{level}</p>
        <p className="hours">{hours}</p>
      </div>
      <div className="title">{title}</div>
    </div>
  );
}

export default Courses;
