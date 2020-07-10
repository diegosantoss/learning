import React, { useState } from "react";
import classNames from "classnames";

const Note = ({ note,  onEdit,  onDelete,  index,  handleMovePosition,  total }) => {

  const [ isEditing, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(true)
  }

  const handleCancel = () => {
    setIsEdit(false)
  }

  const handleDone = (id) => {
    const ref = document.querySelector('[data-ref="'+ id +'"]').value;

    onEdit(id, ref);
    setIsEdit(false)
  }
  return (
    <div className="note">
      {isEditing ? (
        <input type="text" className="note__input" defaultValue={note.text} data-ref={note.id} />
      ) : (
        <span className="note__text">{note.text}</span>
      )}
      
      {isEditing ? (
        <>
          <button className="note__button note__button--red" onClick={() => handleCancel(note.id)}>
            <i className="material-icons">cancel</i>
          </button>

          <button className="note__button note__button--green" onClick={() => handleDone(note.id)}>
            <i className="material-icons">done_outline</i>
          </button>
        </>
      ) : (
        <>
          <button className="note__button" onClick={() => handleEdit(note.id)}>
            <i className="material-icons">edit</i>
          </button>

          <button className="note__button" onClick={() => onDelete(note.id)}>
            <i className="material-icons">delete</i>
          </button>

          <button
            className={classNames("note__button", {
              "note__button--hiden": index === 0,
            })}
            onClick={() => handleMovePosition("up", index)}
          >
            <i className="material-icons">keyboard_arrow_up</i>
          </button>

          <button
            className={classNames("note__button", {
              "note__button--hiden": index === total - 1,
            })}
            onClick={() => handleMovePosition("down", index)}
          >
            <i className="material-icons">keyboard_arrow_down</i>
          </button>
        </>
      )}


    </div>
  );
  
}

export default Note;