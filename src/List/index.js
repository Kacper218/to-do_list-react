import React from 'react';
import { TasksList, ListItem, Content, Button } from "./styled";

const List = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <TasksList>
    {tasks.map(task => (
      <li
        key={task.id}
      >
        <ListItem
          hidden={task.done && hideDone}
        >
          <Button
            toggleTaskDone
            onClick={() => toggleTaskDone(task.id)}
          >
            {task.done ? "✔" : ""}
          </Button>
          <Content
            done={task.done}
          >
            {task.content}
          </Content>
          <Button
            remove
            onClick={() => removeTask(task.id)}
          >🗑</Button>
        </ListItem>
      </li>
    ))}
  </TasksList>

);

export default List;