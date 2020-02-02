import * as React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import DrawerToggleButton from "./../side_drawer/DrawerToggleButton";

function Navbar(props: { drawerClickHandler: any }) {
  return (
    <header className="navbar">
      <nav className="navbar_navigation">
        <div className="navbar_toggle_button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="navbar_logo">
          <Link className="link" to="/">
            <h3>logo</h3>
          </Link>
        </div>
        <div className="spacer" />
        <div className="navbar_navigation_items">
          <ul>
            <Link className="link" to="/Dashboard">
              <li>
                <h3>Dashboard</h3>
              </li>
            </Link>
            <Link className="link" to="/TableView">
              <li>
                <h3>Task Tracker</h3>
              </li>
            </Link>
            <Link className="link" to="/UserPage">
              <li>
                <h3>User</h3>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
