import React from "react";
import "./Third.css";
import Avatar from "react-avatar";
import Courses from "./Courses";
import Last from "./Last";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

function Third() {
  return (
    <div className="third">
      <div className="third_title">
        <div className="title_left">
          <h1>Overview</h1>
        </div>
        <div className="title_right">
          <div className="right_share">
            <span>Share </span>
            <ShareOutlinedIcon />
          </div>
          <div className="right_contact">Contact</div>
        </div>
      </div>
      <div className="third_body">
        <div className="third_bodyLeft">
          <Avatar name="name" size={125} round="25px" />

          <div className="avatar_detail">
            <p className="avatar_name">buddha tamang</p>
            <p className="avatar_email">buddhatamang1000@gmail.com</p>
          </div>

          <div className="work_detail">
            <div className="hours_detail">
              <h3>64</h3>
              <p>hours</p>
            </div>
            <div className="class_detail">
              <h3>3</h3>
              <p>Classes</p>
            </div>
          </div>

          <div className="user_interest">
            <p>App design</p>
            <p> front end</p>
          </div>
        </div>

        <div className="third_bodyRight">
          <div className="right_title">
            <p>Buddha's class</p>
            <SearchOutlinedIcon />
          </div>
          <Courses />
          <Courses />
          <Courses />
        </div>

        <Last />
      </div>
    </div>
  );
}

export default Third;
