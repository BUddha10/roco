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
      <p>{level}</p>
      <p>{hours}</p>
      <p>{title}</p>
    </div>
  );
}

export default Courses;
