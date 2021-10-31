import { useState } from "react";
import "./App.css";

import NotesList from "./components/NotesList/NotesList";
import { dummy } from "./static/dummy";
function App() {
  return (
    <p className="container">
      <NotesList dummy={dummy} />
    </p>
  );
}

export default App;
