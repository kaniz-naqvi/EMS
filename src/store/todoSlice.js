import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  editingTodoId: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
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
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    setEditingTodoId: (state, action) => {
      state.editingTodoId = action.payload;
    },
  },
});

export const { addTodo, removeTodo, editTodo, setEditingTodoId } =
  todoSlice.actions;
export default todoSlice.reducer;
