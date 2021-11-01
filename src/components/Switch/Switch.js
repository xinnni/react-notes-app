import React from "react";
import "./Switch.css";

function Switch({ handleToggleDarkMode }) {
  const handleToggleDarkModes = () => {
    handleToggleDarkMode((prev) => !prev);
  };
  return (
    <label className="switch">
      <input
        type="checkbox"
        className="inputs"
        onClick={handleToggleDarkModes}
      />
      <span className="slider rounded" />
    </label>
  );
}

export default Switch;
