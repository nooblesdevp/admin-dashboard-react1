import React from "react";

import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutline,
  Storefront,
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  MailOutline,
  Report,
  WorkOutline,
} from "@material-ui/icons";
import "./sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {/* Dashboard */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle />
              Home
            </li>
            <li className="sidebarListItem ">
              <Timeline />
              Analytics
            </li>
            <li className="sidebarListItem ">
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
        {/* QuickMenu */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PersonOutline />
              User
            </li>
            <li className="sidebarListItem">
              <Storefront />
              Products
            </li>
            <li className="sidebarListItem">
              <AttachMoney />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart />
              Reports
            </li>
          </ul>
        </div>
        {/* Notifications */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MailOutline />
              Mail
            </li>
            <li className="sidebarListItem ">
              <DynamicFeed />
              Feedback
            </li>
            <li className="sidebarListItem ">
              <ChatBubbleOutline />
              Message
            </li>
          </ul>
        </div>
        {/* Staff */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline />
              Manage
            </li>
            <li className="sidebarListItem ">
              <Timeline />
              Analytics
            </li>
            <li className="sidebarListItem ">
              <Report />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
