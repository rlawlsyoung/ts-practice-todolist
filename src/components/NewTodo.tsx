import React, { useRef } from "react";
import styled from "styled-components";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todoFormRef = useRef<HTMLFormElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const inputValue = todoTextInputRef.current!.value;

    if (!inputValue.trim().length) return;

    props.onAddTodo(inputValue);

    todoFormRef.current?.reset();
  };

  return (
    <StyledNewTodo onSubmit={submitHandler} ref={todoFormRef}>
      <label>Todo text</label>
      <input type="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </StyledNewTodo>
  );
};

const StyledNewTodo = styled.form`
  width: 40rem;
  margin: 2rem auto;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    display: block;
    width: 100%;
    font: inherit;
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: #f7f5ef;
    border: none;
    border-bottom: 2px solid #494844;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    margin-bottom: 0.5rem;
  }

  button {
    font: inherit;
    background-color: #ebb002;
    border: 1px solid #ebb002;
    color: #201d0f;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover,
  button:active {
    background-color: #ebc002;
    border-color: #ebc002;
  }
`;

export default NewTodo;
