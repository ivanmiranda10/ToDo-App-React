import React from "react";
import useForm from "../Hooks/useForm";
import InputField from "./inputField";

const AddTodo = ({ userAPI }) => {
  const { toDo, handleChange, handleSubmit } = useForm();

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, userAPI)}>
        <InputField
          name="toDo"
          placeholder="Need to do something ?"
          value={toDo.title}
          onChange={handleChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AddTodo;
