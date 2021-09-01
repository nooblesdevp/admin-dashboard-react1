import React from "react";

import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import LanguageIcon from "@material-ui/icons/Language";
import SettingsIcon from "@material-ui/icons/Settings";

import imgProfile from "../../assets/pp1.jpg";
import "./topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="logo">Admin Dashboard</span>
        </div>
        <div className="topright">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img src={imgProfile} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
