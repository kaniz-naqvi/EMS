import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./todoSlice";
export default store = configureStore({
  reducer: TodoReducer,
});
