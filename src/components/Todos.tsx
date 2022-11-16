import React from "react";
import Todo from "../models/todo";
import TodoBox from "./TodoBox";

import styled from "styled-components";

const Todos: React.FC<{
  items: Todo[];
  removeTodo: (text: string) => void;
}> = ({ items, removeTodo }) => {
  return (
    <StyledTodos>
      {items.map((item) => (
        <TodoBox item={item} key={item.id} removeTodo={removeTodo} />
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
