import React from "react";
import { IoCut } from "react-icons/io5";
import moment from "moment";

import "./Note.css";

function Note({ id, text, date }) {
  const nowTime = moment().format("YYYY-MM-DD");

  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <IoCut className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
}

export default Note;
