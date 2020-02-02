import React from "react";
import "./tableView.css";
import AddItem from "./../addItem/AddItem";
import Form from "./../form/Form";

function TableView() {
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
      <Form />
      <AddItem />
    </div>
  );
}

export default TableView;
