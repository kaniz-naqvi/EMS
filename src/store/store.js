import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./todoSlice";
import user from "./userSlice";
const store = configureStore({
  reducer: { todos: TodoReducer, user: user },
});
export default store;
