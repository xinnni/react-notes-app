import { useState } from "react";
import "./App.css";

import { nanoid } from "nanoid";
import NotesList from "./components/NotesList/NotesList";
import { dummy } from "./static/dummy";

import moment from "moment";

function App() {
  const [note, setNote] = useState(dummy);

  const addNote = (text) => {
    const date = moment().format("YYYY-MM-DD");
    const newNote = {
      id: nanoid(),
      text: text,
      date: date,
    };

    const newNotes = [...note, newNote];

    setNote(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = note.filter((el) => el.id !== id);
    setNote(newNotes);
  };

  return (
    <p className="container">
      <NotesList
        dummy={note}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </p>
  );
}

export default App;
