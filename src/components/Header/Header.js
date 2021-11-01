import React from "react";
import "./Header.css";

function Header({ handleToggleDarkMode }) {
  const handleToggleDarkModes = () => {
    handleToggleDarkMode((prev) => !prev);
  };
  return (
    <div className="header">
      <h1>Notes</h1>
      <button onClick={handleToggleDarkModes} className="save">
        Toggle Mode
      </button>
    </div>
  );
}

export default Header;
