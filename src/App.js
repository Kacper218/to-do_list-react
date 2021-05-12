import React, { useState } from 'react';
import Form from './Form';
import List from './List';
import Buttons from './Buttons'
import Section from './Section'
import Header from './Header'
import Container from './Container'

function App() {
  const [hideDone, setHideDone] = useState(false);

  const [tasks, setTasks] = useState([
    { id: 1, content: "Przejśc na reacta", done: true },
    { id: 2, content: "zjeść obiad", done: false },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      };
      return task;
    }));
  };

  return (

    <Container>

      <Header title="Lista zadań" />

      <Section extraTitle="Dodaj nowe zadanie" body={<Form />} />

      <Section body={
        <>
          <Buttons tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
          <List
            tasks={tasks} hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        </>
      }
      />
    </Container>
  );
}

export default App;
