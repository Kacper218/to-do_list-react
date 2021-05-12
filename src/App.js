import React, {useState} from 'react';
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
function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (

    <Container>

      <Header title="Lista zadań"/>

      <Section extraTitle="Dodaj nowe zadanie" body={<Form />} />

      <Section body={
        <>
          <Buttons tasks={tasks}
          hideDone={hideDone}
          toggleHideDone={toggleHideDone}
          />
          <List tasks={tasks} hideDone={hideDone} />
        </>
      }
      />
    </Container>
  );
}

export default App;
