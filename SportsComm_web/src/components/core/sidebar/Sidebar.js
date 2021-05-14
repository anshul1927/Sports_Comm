import React from "react";
import { usertype } from "../../../apollo";

import Adminsidebar from "./Adminsidebar";
import Clientsidebar from "./Clientsidebar";
import { useReactiveVar } from "@apollo/client";

const Sidebar = ({ user }) => {
  const usert = useReactiveVar(usertype);

  return (
    <div className="main-sidebar">
      <section className="sidebar">
        {usert ? <Adminsidebar /> : <Clientsidebar />}
      </section>
    </div>
  );
};

export default Sidebar;
