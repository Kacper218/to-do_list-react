import React from 'react';
import "./style.css";

const List = ({tasks, hideDoneTasks}) => (
  <ul className="list">
    {tasks.map(task => (
      <span className={`list__item${task.done && hideDoneTasks ? " list__item--hidden" : ""}`}>
        <button className="list__buttonToggle">
        {task.done ? "✔" : ""}
        </button>
        <li 
        key={task.id}
        className={`"list__text js-text
        ${task.done ? "list-text--done" : ""}"`}
        >
        {task.content}
        </li>
        <button className="list__buttonRemove">🗑️</button>
      </span>
    ))}
  </ul>

);

export default List;