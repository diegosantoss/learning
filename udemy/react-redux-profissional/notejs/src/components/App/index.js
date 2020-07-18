import React, { useState, useEffect } from "react";

import AppBar from '../AppBar';
import NoteList from '../NoteList';
import NewNote from '../NewNote';

const App = () => {
  const localStorage = [];
  const [notes, setNotes] = useState(localStorage);

  const onAddNote = (note) => {
    setNotes((prevState) => {
      return notes.concat({ id: new Date().getTime(), text: note });
    });

    handleSave();
  };

  const handleMovePosition = (type, index) => {
    setNotes((prevState) => {
      const newNotes = prevState.slice();
      const removedNote = newNotes.splice(index, 1)[0];

      if (type === "up") {
        newNotes.splice(index - 1, 0, removedNote);
      } else {
        newNotes.splice(index + 1, 0, removedNote);
      }

      return newNotes;
    });

    handleSave();
  };

  const onDelete = (id) => {
    setNotes((prevState) => {
      const newNotes = prevState.slice();
      const index = newNotes.findIndex((note) => note.id === id);

      newNotes.splice(index, 1);

      return newNotes;
    });

    handleSave();
  };

  const onEdit = (id, text) => {
    setNotes((prevState) => {
      const newNotes = prevState.slice();
      const index = newNotes.findIndex((note) => note.id === id);

      newNotes[index].text = text;

      return newNotes;
    });

    handleSave();
  };

  const handleReload = () => {
    const ReloadNotes = window.localStorage.getItem('notes');
    setNotes(JSON.parse(ReloadNotes));
  }

  const handleSave = () => {
    window.localStorage.setItem('notes', JSON.stringify(notes));
  }
  

  return (
    <>
      <AppBar onReload={handleReload} onSave={handleSave} />  
      <section className="container">
        <NewNote onAddNote={onAddNote} />
        <NoteList
          notes={notes}
          onEdit={onEdit}
          handleMovePosition={handleMovePosition}
          onDelete={onDelete}
        />
      </section>
    </>
  );
};

export default App;