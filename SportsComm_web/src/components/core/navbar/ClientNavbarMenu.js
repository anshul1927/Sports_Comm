import React from "react";
import PropTypes from "prop-types";
import { intersection } from "lodash";

import MenuGroup from "./ClientNavbarMenuGroup";
import MenuItem from "./ClientNavbarMenuItem";

const ClientNavbarMenu = ({ user }) => (
  <ul className="nav navbar-nav">
    <MenuGroup title="Customers">
      <MenuItem title="Information" path="/customers" />
      <MenuItem title="Edit Details" path={`/customers/user._id/edit`} />
    </MenuGroup>
  </ul>
);

ClientNavbarMenu.propTypes = {
  user: PropTypes.object,
};

export default ClientNavbarMenu;
