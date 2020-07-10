import React, { useState } from "react";

import AppBar from '../AppBar';
import NoteList from '../NoteList';
import NewNote from '../NewNote';

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, text: "teste1" },
    { id: 2, text: "teste2" },
    { id: 3, text: "teste3" },
    { id: 4, text: "teste4" }
  ]);

  const onAddNote = (note) => {
    setNotes((prevState) => {
      return notes.concat({ id: new Date().getTime(), text: note });
    });
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
  };

  const onDelete = (id) => {
    setNotes((prevState) => {
      const newNotes = prevState.slice();
      const index = newNotes.findIndex((note) => note.id === id);

      newNotes.splice(index, 1);

      return newNotes;
    });
  };

  const onEdit = (id, text) => {
    setNotes((prevState) => {
      const newNotes = prevState.slice();
      const index = newNotes.findIndex((note) => note.id === id);

      newNotes[index].text = text;

      return newNotes;
    });
  };

  return (
    <>
      <AppBar />  
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