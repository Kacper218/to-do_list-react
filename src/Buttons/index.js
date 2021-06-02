import React from 'react';
import { ButtonsContainer, ButtonsHeader, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
  if (tasks.length === 0) {
    return (
      <ButtonsContainer>
        <ButtonsHeader>
          Lista zadań
        </ButtonsHeader>
        <Button none disabled></Button>
        <Button none disabled></Button>
      </ButtonsContainer>
    )
  }
  return (
    <ButtonsContainer>
      <ButtonsHeader>
        Lista zadań
        </ButtonsHeader>
      <Button
        onClick={toggleHideDone}
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </Button>
      <Button
        disabled={tasks.every(({ done }) => done)}
        onClick={setAllDone}
      >
        Ukończ wszystkie
      </Button>
    </ButtonsContainer>
  )
};

export default Buttons;
