import React from "react";
import "./drawerToggleButton.css";

interface buttonProps {
  click: React.MouseEventHandler<HTMLButtonElement>;
}

function DrawerToggleButton(props: buttonProps) {
  return (
    <button className="toggle_button" onClick={props.click}>
      <div className="toggle_button_line" />
      <div className="toggle_button_line" />
      <div className="toggle_button_line" />
    </button>
  );
}

// const DrawerToggleButton = () => (
//   <button className="toggle_button">
//     <div className="toggle_button_line" />
//     <div className="toggle_button_line" />
//     <div className="toggle_button_line" />
//   </button>
// );

export default DrawerToggleButton;
