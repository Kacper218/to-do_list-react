import React from 'react';
import "./style.css";

const List = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="list">
    {tasks.map(task => (
      <li
      key={task.id}
      >
        <span className={`list__item ${task.done && hideDone ? " list__item--hidden" : ""}`}>
          <button
            className="list__buttonToggle"
            onClick={() => toggleTaskDone(task.id)}
          >
            {task.done ? "✔" : ""}
          </button>
          <span
            className={`list__text ${task.done ? "list__text--done" : ""}`}
          >
            {task.content}
          </span>
          <button
            className="list__buttonRemove"
            onClick={() => removeTask(task.id)}
          >🗑</button>
        </span>
      </li>
    ))}
  </ul>

);

export default List;