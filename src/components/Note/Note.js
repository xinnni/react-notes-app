import React from "react";
import { IoCut } from "react-icons/io5";
import moment from "moment";

import "./Note.css";

function Note() {
  const nowTime = moment().format("YYYY-MM-DD");

  return (
    <div className="note">
      <span>Hello! This is out first note!</span>
      <div className="note-footer">
        <small>{nowTime}</small>
        <IoCut className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
}

export default Note;
