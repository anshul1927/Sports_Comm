import React from "react";
import PropTypes from "prop-types";

import ClientNavbar from "./ClientNavbar";
import AdminNavbar from "./AdminNavbar";
import { usertype } from "../../../apollo";
import { useReactiveVar } from "@apollo/client";

const Header = ({ settings, user }) => {
  const usert = useReactiveVar(usertype);

  return (
    <div>
      {/* {usertype() === "Admin" ? <p>admin</p> : <p>client</p>} */}
      {usert ? (
        <AdminNavbar user={user} settings={settings} />
      ) : (
        <ClientNavbar user={user} settings={settings} />
      )}
    </div>
  );
};
Header.propTypes = {
  settings: PropTypes.object,
  user: PropTypes.object,
};

export default Header;
