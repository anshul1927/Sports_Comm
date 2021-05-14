import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { logUserOut } from "../../../apollo";

const NavbarUserMenu = ({ user }) => (
  <div className="navbar-custom-menu">
    <ul className="nav navbar-nav">
      {/*<!-- User account -->*/}
      <li className="dropdown user user-menu">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          <span>anshul garg</span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <Link to="/users/notifications">Notifications</Link>
          </li>
          <li>
            <Link to="/users/profile">Edit Profile</Link>
          </li>
          <li>
            <Link to="/users/change-password">Change Password</Link>
          </li>
          <li className="divider"></li>
          <li>
            <button onClick={() => logUserOut()}>Log out now!</button>
            <a href="/api/auth/signout">Signout</a>
          </li>
        </ul>
      </li>
    </ul>

    <ul className="nav navbar-nav">
      {/*<!-- User account -->*/}
      <li className="dropdown user user-menu">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          <span>5 Notifications</span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <Link to="/users/changepassword">notification msg</Link>
            <div className="divider"></div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default NavbarUserMenu;
