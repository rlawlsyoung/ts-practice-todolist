import React from "react";
import styled from "styled-components";

const TodoBox: React.FC<{ text: string }> = ({ text }) => {
  return <StyledTodoBox>{text}</StyledTodoBox>;
};

const StyledTodoBox = styled.li`
  margin: 1rem 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  background-color: #f7f5ef;
`;

export default TodoBox;
