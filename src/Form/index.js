import React, { useState, useRef } from 'react';
import "./style.css";


const Form = ({ addNewTask }) => {
  const inputRef = useRef(null);
  const [newTaskContent, setNewTaskContent] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();
    if (!trimmedNewTaskContent) {
      return;
    }

    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <form
      className="form"
      onSubmit={onFormSubmit}
    >
      <div className="form__container">
        <input
          ref={inputRef}
          value={newTaskContent}
          className=" form__input"
          placeholder="Co jest do zrobienia?"
          onChange={({ target }) => setNewTaskContent(target.value)}
        />
        <button className="form__button">Dodaj zadanie</button>
      </div>
    </form>
  );
};

export default Form;