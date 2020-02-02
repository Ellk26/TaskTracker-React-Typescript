import React from "react";
import "./addItem.css";

function AddItem(props: { formClickHandler: any }) {
  return (
    <div>
      <button className="add_button_item" onClick={props.formClickHandler}>
        <h1>Add Item</h1>
      </button>
    </div>
  );
}

export default AddItem;
