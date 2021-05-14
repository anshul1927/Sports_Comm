import { Link } from "react-router-dom";
import { isLoggedInVar, logUserOut } from "../apollo";
import Sidebar from "../components/core/sidebar/Sidebar";
import { Route } from "react-router-dom";
import SwitchWithNotFound from "../components/router/SwitchWithNotFound";

import Header from "../components/core/navbar/Header";

import createAccount from "./CreateAccount";

function Home() {
  return (
    <div className={`skin-blue fixed layout-top-nav`}>
      <div className="wrapper">
        <div>
          <Sidebar />
          <Header />
          <div className="content-wrapper">
            <SwitchWithNotFound>
              <Route path="/create_account" component={createAccount} />
              {/* <Route path="/customers" component={Customers} />
              <Route path="/donors" component={Donors} />
              <Route path="/drivers" component={Drivers} />
              <Route path="/inventory" exact component={canInventory(Inventory)} />
              <Route path="/packing" exact component={canPack(Packing)} />
              <Route path="/schedule" exact component={canSchedule(Schedule)} />
              <Route path="/settings" component={IsAdmin(Settings)} />
              <Route path="/users" component={Users} />
              <Route path="/volunteers" component={Volunteers} /> */}
            </SwitchWithNotFound>
          </div>
          <div>
            <h1>Welcome</h1>
            <Link to="/create-account">
              <button>Add User</button>
            </Link>
            <Link to="/createAccount">
              <button>Add equipment</button>
            </Link>
            <button onClick={() => logUserOut()}>Log out now!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
