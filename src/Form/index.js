import React, { useState, useRef } from 'react';
import { FormButton, FormContainer, MainForm, Input} from "./styled";


const Form = ({ addNewTask }) => {
  const inputRef = useRef(null);
  const [newTaskContent, setNewTaskContent] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();
    if (!trimmedNewTaskContent) {
      return;
    }

    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <MainForm
      onSubmit={onFormSubmit}
    >
      <FormContainer>
        <Input
          ref={inputRef}
          value={newTaskContent}
          placeholder="Co jest do zrobienia?"
          onChange={({ target }) => setNewTaskContent(target.value)}
       />
        <FormButton>
          Dodaj Zadanie
        </FormButton>
      </FormContainer>
    </MainForm>
  );
};

export default Form;