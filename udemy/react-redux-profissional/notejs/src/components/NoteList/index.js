import React from 'react';

import Note from '../Note';

const NoteList = ({ notes, handleMovePosition, onDelete, onEdit }) => (
  <section className="note-list">
    {notes.map((note, index) => (
      <Note
        key={note.id}
        note={note}
        onEdit={onEdit}
        onDelete={onDelete}
        index={index}
        handleMovePosition={handleMovePosition}
        total={notes.length}
      />
    ))}
  </section>
);

export default NoteList;