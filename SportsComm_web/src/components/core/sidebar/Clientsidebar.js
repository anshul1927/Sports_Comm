import React from "react";

import MenuGroup from "./SidebarMenuGroup";
import MenuItem from "./SidebarMenuItem";

const Clientsidebar = () => (
  <ul className="sidebar-menu" data-widget="tree">
    <MenuItem title="Requested list" path="/customers/list" />

    <MenuItem title="User Accounts" path="/users/list" />

    <MenuItem title="Inventory" path="/inventory" />
    <MenuItem title="Feedback" path="/packing" />
  </ul>
);

export default Clientsidebar;
