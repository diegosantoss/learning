import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import './index.scss';

const App = () => {
  const [notes, setNotes] = useState([]);

  const onAddNote = note => {
    setNotes(prevState => {
      return notes.concat({ id: new Date().getTime(), text: note});
    })
  }

  const handleMovePosition = (type, index) => {
    setNotes(prevState => {
      const newNotes = prevState.slice();
      const removedNote = newNotes.splice(index, 1)[0];

      if(type === 'up'){
        newNotes.splice(index - 1, 0, removedNote);
      } else {
        newNotes.splice(index + 1, 0, removedNote);
      }

      return newNotes;
    })
  }

  return (
    <section className="container">
      <NewNote onAddNote={onAddNote}  />
      <NoteList notes={notes} handleMovePosition={handleMovePosition} />
    </section>
  )
}

const NewNote = ({ onAddNote }) => {
  const [text, setText] = useState('');

  const handleChangeText = txt => {
    setText(txt);
  }

  return (
    <div className="new-note">
      <input
        type="text"
        className="new-note__input"
        placeholder="Digite sua nota aqui..."
        value={text}
        onChange={evt => {
          handleChangeText(evt.target.value)
        }}
        onKeyPress={evt => {
          if (evt.key === 'Enter') {
            onAddNote(evt.target.value);
            setText('');
          }
        }}
      />
    </div>
  )
}

const NoteList = ({ notes, handleMovePosition }) => (
  <section className="note-list">
    {notes.map( (note, index) => (
      <div key={note.id} className="note">
        <span className="note__text">{note.text}</span>
          <button className={classNames("note__button", { "note__button--hiden" : index === 0 })} onClick={ () => handleMovePosition('up', index)}>
            <i className="material-icons">keyboard_arrow_up</i>
          </button>

          <button className={classNames("note__button", { "note__button--hiden" : index === notes.length - 1 })} onClick={ () => handleMovePosition('down', index)}>
            <i className="material-icons">keyboard_arrow_down</i>
          </button>
      </div>
    ))}
  </section>
)

ReactDOM.render(
  <App />,
  document.getElementById("root")
);  