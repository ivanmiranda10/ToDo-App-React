import React from "react";
import useForm from "../../Hooks/useForm";
import InputField from "../inputField/inputField";
import TodoList from "../todosContainer/todoList";
import Button from "../Button";
import { FormContainer } from "./styles";

const AddTodo = ({ userAPI, listOfToDos }) => {
  const { toDo, handleChange, handleSubmit } = useForm();

  return (
    <>
      <FormContainer
        onSubmit={(e) => handleSubmit(e, userAPI)}
        autoComplete="off"
      >
        <InputField
          type="text"
          name="toDo"
          placeholder="Escribí un item"
          value={toDo.title}
          onChange={handleChange}
          onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
        />
        <TodoList userAPI={userAPI} listOfToDos={listOfToDos} />
        <Button type="submit">Agregar</Button>
      </FormContainer>
    </>
  );
};

export default AddTodo;
