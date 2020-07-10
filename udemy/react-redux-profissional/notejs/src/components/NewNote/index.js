import React, { useState } from "react";

const NewNote = ({ onAddNote }) => {
  const [text, setText] = useState("");

  const handleChangeText = (txt) => {
    setText(txt);
  };

  return (
    <div className="new-note">
      <input
        type="text"
        className="new-note__input"
        placeholder="Digite sua nota aqui..."
        value={text}
        onChange={(evt) => {
          handleChangeText(evt.target.value);
        }}
        onKeyPress={(evt) => {
          if (evt.key === "Enter") {
            onAddNote(evt.target.value);
            setText("");
          }
        }}
      />
    </div>
  );
};

export default NewNote;