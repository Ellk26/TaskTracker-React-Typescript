import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SideDrawer from "./components/side_drawer/SideDrawer";
import Backdrop from "./components/backdrop/Backdrop";
import TableView from "./components/tableView/TableView";
import UserPage from "./components/userPage/UserPage";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export interface AppProps {}

export interface AppState {
  sideDrawerOpen: boolean;
}

class App extends React.Component<AppProps, AppState> {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <Router>
        <div className="App">
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backDrop}
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/TableView" exact component={TableView} />
            <Route path="/UserPage" exact component={UserPage} />
            <Route path="/Dashboard" exact component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
