import React from 'react';
import "./style.css";

const List = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="list">
    {tasks.map(task => (
      <span className={`list__item ${task.done && hideDone ? " list__item--hidden" : ""}`}>
        <button
          className="list__buttonToggle"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </button>
        <li
          key={task.id}
          className={`"list__text 
        ${task.done ? "list__text--done" : ""}"`}
        >
          {task.content}
        </li>
        <button
          className="list__buttonRemove"
          onClick={() => removeTask(task.id)}
        >
          🗑
          ️</button>
      </span>
    ))}
  </ul>

);

export default List;