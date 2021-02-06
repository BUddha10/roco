import React from "react";
import "./First.css";

import { IconButton } from "@material-ui/core";

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
        <span>RO</span> <span>CO</span>
      </div>
      <div className="first_middle">
        <IconButton>
          <PersonOutlineOutlinedIcon />
        </IconButton>

        <IconButton>
          <DescriptionOutlinedIcon />
        </IconButton>

        <IconButton>
          <ShareOutlinedIcon />
        </IconButton>

        <IconButton>
          <ChatBubbleOutlineOutlinedIcon />
        </IconButton>

        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
      </div>

      <div className="first_logout">
        <ExitToAppOutlinedIcon />
      </div>
    </div>
  );
}

export default First;
