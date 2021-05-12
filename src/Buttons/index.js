import React from 'react';
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => {
  if (tasks.length === 0) {
    return (
      <div className="buttons__container">
        <h2 className="section__header">Lista zadań</h2>
        <button className="buttons__button--none" disabled></button>
        <button className="buttons__button--none" disabled></button>
      </div>
    )
  }
  return (
    <div className="buttons__container">
      <h2 className="section__header">Lista zadań</h2>
      <button
        onClick={toggleHideDone}
        className="buttons__button"
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
      <button
        className="buttons__button"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
          </button>
    </div>
  )
};

export default Buttons;
