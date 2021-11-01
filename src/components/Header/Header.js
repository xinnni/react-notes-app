import React from "react";
import "./Header.css";

function Header({ handleToggleDarkMode }) {
  const handleToggleDarkModes = () => {
    handleToggleDarkMode((prev) => !prev);
  };
  return (
    <div className="header">
      <h1 className="header-h1">Notes</h1>
      <label className="switch">
        <input
          type="checkbox"
          className="inputs"
          onClick={handleToggleDarkModes}
        />
        <span className="slider rounded" />
      </label>
    </div>
  );
}

export default Header;
