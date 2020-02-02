import React from "react";
import "./backdrop.css";

interface backdropProps {
  click: React.MouseEventHandler<HTMLDivElement>;
}

function Backdrop(props: backdropProps) {
  return <div className="backdrop" onClick={props.click}></div>;
}

// const Backdrop = () => {
//     <div></div>
// }

export default Backdrop;
