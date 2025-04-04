import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./todoSlice";
import user from "./userSlice";
import logger from "./logger";
const store = configureStore({
  reducer: { todos: TodoReducer, user: user },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
