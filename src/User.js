import React from "react";
import "./User.css";
import Avatar from "react-avatar";

function User({ name, hours }) {
  return (
    <div className="user">
      <Avatar name="name" size={40} round="100px" />
      <div className="user_detail">
        <p>{name}</p>
        <p>{hours} h</p>
      </div>
    </div>
  );
}

export default User;
