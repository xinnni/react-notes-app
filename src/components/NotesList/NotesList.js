import React from "react";

import Note from "../Note/Note";
import AddNote from "../AddNote/AddNote";

import "./NotesList.css";

function NotesList({ dummy }) {
  return (
    <div className="notesList">
      {dummy.map(({ id, text, date }) => (
        <Note id={id} text={text} date={date} />
      ))}
      <AddNote />
    </div>
  );
}

export default NotesList;
