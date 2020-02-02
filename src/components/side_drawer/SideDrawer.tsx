import * as React from "react";
import "./../side_drawer/sideDrawer.css";
import { Link } from "react-router-dom";

interface sideDrawerShowProps {
  show: boolean;
}

function SideDrawer(props: sideDrawerShowProps) {
  let drawerClasses = "side_drawer";
  if (props.show) {
    drawerClasses = "side_drawer open";
  }
  return (
    <nav className={drawerClasses}>
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
    </nav>
  );
}

// const SideDrawer = () =>{
//     <nav>
//       <ul>
//         <li>
//           <h1>Search</h1>
//         </li>
//       </ul>
//     </nav>
// }

export default SideDrawer;
