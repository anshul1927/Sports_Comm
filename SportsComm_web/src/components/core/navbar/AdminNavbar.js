import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import NavbarUserMenu from "./NavbarUserMenu";

const AdminNavbar = ({ user, settings }) => (
  <header className="main-header">
    <nav className="navbar navbar-static-top" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="logo">
            SportsComm
          </Link>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-collapse"
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>

        <NavbarUserMenu user={user} />
      </div>
    </nav>
  </header>
);

AdminNavbar.propTypes = {
  user: PropTypes.object,
  settings: PropTypes.shape({
    organization: PropTypes.string,
  }),
};

export default AdminNavbar;
