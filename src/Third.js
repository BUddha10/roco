import React from "react";
import "./Third.css";
import Avatar from "react-avatar";
import Courses from "./Courses";
import Last from "./Last";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import first from "./images/first.jpeg";
import second from "./images/second.jpeg";
import third from "./images/third.jpeg";

import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AddIcon from "@material-ui/icons/Add";
import HelpOutlinedIcon from "@material-ui/icons/HelpOutlined";
import InterestCard from "./InterestCard";
import { IconButton } from "@material-ui/core";

function Third() {
  return (
    <div className="third">
      <div className="third_title">
        <div className="title_left">
          <h1>Overview</h1>
        </div>

        <div className="title_right">
          <div className="right_share">
            <p>
              <IconButton>Share</IconButton>
            </p>
            <IconButton>
              <ShareOutlinedIcon />
            </IconButton>
          </div>
          <div className="right_contact">
            <IconButton>Contact</IconButton>
          </div>
        </div>
      </div>

      <div className="third_body">
        <div className="third_bodyLeft">
          <Avatar name="name" size={125} round="25px" />

          <div className="avatar_detail">
            <h3 className="avatar_name">buddha tamang</h3>
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
            <div className="user_interestTitle">Interests</div>
            <div className="interestList">
              <InterestCard interest="app design" />
              <InterestCard interest="web developer" />
              <InterestCard interest="mobile dev" />
              <InterestCard interest="ux ui" />
              <InterestCard interest="backend" />
              <InterestCard interest="frontend" />
            </div>
          </div>
        </div>

        <div className="third_bodyMiddle">
          <div className="right_title">
            <p>Buddha's class</p>
            <SearchOutlinedIcon />
          </div>
          <Courses
            backgroundImg={first}
            title="neutal network"
            hours="12"
            level="advanced"
          />
          <Courses
            backgroundImg={second}
            title="neutal network"
            hours="12"
            level="advanced"
          />
          <Courses
            backgroundImg={third}
            title="neutal network"
            hours="12"
            level="advanced"
          />
        </div>

        <Last />
      </div>
    </div>
  );
}

export default Third;
