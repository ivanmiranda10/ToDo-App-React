import React from "react";
import TodoItem from "../todoItem/todoItem";
import Filters from "../FilterOptions/filters";
import ButtonModal from "../Modal";
import { Container, HeaderContainer, Title, ContentContainer } from "./styles";

const TodoList = ({ userAPI, listOfToDos }) => {
  return (
    <div>
      {listOfToDos.length >= 1 && (
        <Container>
          <HeaderContainer>
            <Title>
              <h2>To do list</h2>
              <ButtonModal userAPI={userAPI} />
            </Title>
            <Filters userAPI={userAPI} />
          </HeaderContainer>
          <ContentContainer>
            {listOfToDos.map((elem) => {
              return <TodoItem key={elem.id} item={elem} userAPI={userAPI} />;
            })}
          </ContentContainer>
        </Container>
      )}
    </div>
  );
};

export default TodoList;
