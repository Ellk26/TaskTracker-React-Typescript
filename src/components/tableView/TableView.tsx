import React, { Component } from "react";
import "./tableView.css";
import AddItem from "./../addItem/AddItem";
import Form from "./../form/Form";

export interface TableState {
  formShow: boolean;
}

class TableView extends React.Component<{}, TableState> {
  state = {
    formShow: false
  };

  formShowClickHandler = () => {
    this.setState(prevState => {
      return { formShow: !prevState.formShow };
    });
  };

  render() {
    let formDisplay;
    if (this.state.formShow) {
      formDisplay = <Form show={this.state.formShow} />;
    }
    return (
      <div>
        <table className="table">
          <tr>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Implementation Date</th>
            <th>App Code</th>
            <th>Description of Work</th>
            <th>Status</th>
            <th>Assigned to</th>
            <th>Task Number</th>
            <th>Category</th>
            <th>Comments</th>
            <th>delete</th>
          </tr>
        </table>
        {formDisplay}
        <AddItem formClickHandler={this.formShowClickHandler} />
      </div>
    );
  }
}

export default TableView;
