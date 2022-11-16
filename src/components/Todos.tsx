import React from "react";
import Todo from "../models/todo";
import TodoBox from "./TodoBox";

import styled from "styled-components";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <StyledTodos>
      {props.items.map((item) => (
        <TodoBox text={item.text} key={item.id} />
      ))}
    </StyledTodos>
  );
};

const StyledTodos = styled.ul`
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  width: 40rem;
`;

export default Todos;
