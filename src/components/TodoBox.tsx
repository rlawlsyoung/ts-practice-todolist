import React from "react";
import Todo from "../models/todo";
import styled from "styled-components";

const TodoBox: React.FC<{
  item: Todo;
  removeTodo: (text: string) => void;
}> = ({ item, removeTodo }) => {
  const removeThisTodo = () => {
    removeTodo(item.id);
  };

  return (
    <StyledTodoBox>
      <div className="text">{item.text}</div>
      <button onClick={removeThisTodo}>remove</button>
    </StyledTodoBox>
  );
};

const StyledTodoBox = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  background-color: #f7f5ef;
`;

export default TodoBox;
