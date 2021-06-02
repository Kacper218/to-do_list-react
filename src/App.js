import React, { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';
import Buttons from './Buttons'
import Section from './Section'
import Header from './Header'
import Container from './Container'
import {useTasks} from './useTasks'


function App() {

  const [hideDone, setHideDone] = useState(false);
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();


  return (

    <Container>

      <Header title="Lista zadań" />

      <Section extraTitle="Dodaj nowe zadanie" body={<Form addNewTask={addNewTask} />} />

      <Section body={
        <>
          <Buttons tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
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
