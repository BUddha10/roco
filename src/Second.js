import React from "react";
import "./Second.css";
import User from "./User";

function Second() {
  return (
    <div className="second">
      <div className="second_title">
        <h2>Student</h2>
        <p>214</p>
      </div>

      <div className="second_search">
        <input type="text" placeholder="Search" />
      </div>

      <User name="buddha tamang" hours="21" />
      <User name="lama" hours="18" />
      <User name="lama" hours="18" />
      <User name="lama" hours="18" />
      <User name="lama" hours="18" />
      <User name="lama" hours="18" />
      <User name="lama" hours="18" />
      <User name="lama" hours="18" />
    </div>
  );
}

export default Second;
