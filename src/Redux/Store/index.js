import { configureStore } from "@reduxjs/toolkit";
import toDos from "../Reducer";

export const store = configureStore({
  reducer: toDos,
});
