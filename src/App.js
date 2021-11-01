import { useEffect, useState } from "react";
import "./App.css";

import { nanoid } from "nanoid";
import NotesList from "./components/NotesList/NotesList";
import { dummy } from "./static/dummy";

import moment from "moment";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";

function App() {
  const [note, setNote] = useState(dummy);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

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

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(note));
  }, [note]);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          dummy={note.filter((el) =>
            el.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
