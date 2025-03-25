import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(), text: "Hello, Get started" }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  addTodo: (state, action) => {
    const todo = {
      id: nanoid(),
      text: action.payload,
    };
    state.todos.push(todo);
  },
  editTodo: (state, action) => {
    const { id, newText } = action.payload;
    const todo = state.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.text = newText;
    }
  },
});
