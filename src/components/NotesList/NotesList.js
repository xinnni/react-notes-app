import React from "react";
import Note from "../Note/Note";

import "./NotesList.css";

function NotesList() {
  return (
    <div className="notesList">
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
}

export default NotesList;
