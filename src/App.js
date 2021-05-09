import React from 'react';
import Form from './Form';
import List from './List';
import Buttons from './Buttons'
import Section from './Section'
import Header from './Header'
import Container from './Container'

let tasks = [
  { id: 1, content: "Przejśc na reacta", done: true },
  { id: 2, content: "zjeść obiad", done: false },
];
let hideDoneTasks = false;

function App() {
  return (

    <Container>

      <Header title="Lista zadań"/>

      <Section extraTitle="Dodaj nowe zadanie" body={<Form />} />

      <Section body={
        <>
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
          <List tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </>
      }
      />
    </Container>
  );
}

export default App;
