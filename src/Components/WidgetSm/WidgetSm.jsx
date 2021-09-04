import React from "react";
import { Visibility } from "@material-ui/icons";

import "./widgetSm.scss";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://i.pravatar.cc/40" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna </span>
            <span className="widgetSmTitleUser">Software Engineer </span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmButtonIcon" />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://i.pravatar.cc/40" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna </span>
            <span className="widgetSmTitleUser">Software Engineer </span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmButtonIcon" />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://i.pravatar.cc/40" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna </span>
            <span className="widgetSmTitleUser">Software Engineer </span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmButtonIcon" />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://i.pravatar.cc/40" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna </span>
            <span className="widgetSmTitleUser">Software Engineer </span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmButtonIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
