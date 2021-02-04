import React from "react";
import "./First.css";

import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

function First() {
  return (
    <div className="first">
      <div className="first_logo">
        {" "}
        <p>RO</p> <p>CO</p>
      </div>
      <div className="first_middle">
        <PersonOutlineOutlinedIcon />
        <DescriptionOutlinedIcon />
        <ShareOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />
        <SettingsOutlinedIcon />
      </div>
      <div className="first_logout">
        <ExitToAppOutlinedIcon />
      </div>
    </div>
  );
}

export default First;
