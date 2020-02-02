import React from "react";
import "./form.css";

const Form = () => {
  return (
    <form className="form_container">
      <label>Start Date </label>
      <input type="date" />

      <label>End Date </label>
      <input type="date" />

      <label>Implementation Date </label>
      <input type="date" />

      <label>App Code </label>
      <input type="text" />

      <label>Description </label>
      <textarea placeholder="Description of Work"></textarea>

      <label>Status </label>
      <select>
        <option>---</option>
        <option>In Progress</option>
        <option>On Hold</option>
        <option>Completed</option>
      </select>

      <label>Assigned to </label>
      <input type="text" />

      <label>Task Number </label>
      <input type="text" />

      <label>Category </label>
      <select>
        <option>---</option>
        <option>Front End</option>
        <option>Back End</option>
      </select>

      <label>Comments</label>
      <textarea placeholder="comments"></textarea>
      <input type="submit" value="Add Item" />
    </form>
  );
};

export default Form;
