import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

function Sidebar() {
  return (
    <React.Fragment>
      <div className="brand">
        <span>Dashboard</span>
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        <Menu.Item key="1">
          <NavLink to="/dashboard">
            <span className="label">Dashboard</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
}

export default Sidebar;
