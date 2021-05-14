import React from "react";

import MenuGroup from "./SidebarMenuGroup";
import MenuItem from "./SidebarMenuItem";

const Adminsidebar = () => (
  <ul className="sidebar-menu" data-widget="tree">
    <MenuItem title="create account" path="/customers/list" />
    <MenuItem title="account_list" path="/customers/list" />
    <MenuItem title="panding request" path="/volunteers/list" />
    <MenuItem title="approved request" path="/donors/list" />

    <MenuItem title="Inventory" path="/inventory" />
    <MenuItem title="Feedback" path="/inventory" />
  </ul>
);

export default Adminsidebar;
