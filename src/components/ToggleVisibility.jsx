import React, { useState } from "react";

export default function ToggleVisibility({ children }) {

  // React state to manage visibility
  const [show, setShow] = useState();
  const [isActive, setActive] = useState("false");

  function handleToggle() {
    setActive(!isActive)
  }

  function toggleShow() {
    setShow(!show);
    handleToggle()
  }
  var buttonText = show ? "⌃" : "⌵";

  return (
    <div className="component">
      {show && children}
      <button onClick={toggleShow} className={`buttonF button-${isActive ? "success" : "danger"}`}>{buttonText}</button>
    </div>
  );
}