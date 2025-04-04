import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, setEditingTodoId } from "../store/todoSlice";

const InputField = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const editTodoId = useSelector((state) => state.todos.editingTodoId);
  useEffect(() => {
    if (todos.length > 0) {
      const todo = todos.find((i) => i.id == editTodoId);
      console.log("todo", todo);
      if (editTodoId) {
        setInput(todo.text);
      }
    } else {
      setInput("");
    }
  }, [editTodoId]);

  function handleSubmit(e) {
    e.preventDefault();
    if (editTodoId) {
      dispatch(editTodo({ id: editTodoId, newText: input }));
      dispatch(setEditingTodoId(null));
    } else {
      dispatch(addTodo(input));
    }
    setInput("");
  }
  return (
    <>
      <form className="lg:p-10 mt-3 mx-4" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="What is in your mind..."
          value={input}
          className="border rounded-md p-3 lg:w-96  w-[90%]"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className={`text-white rounded-md lg:ms-2 p-3 mt-2 lg:w-auto w-[90%] ${
            editTodoId ? "bg-green-700" : "bg-blue-700"
          }`}
        >
          {editTodoId ? "Update" : "Add +"}
        </button>
      </form>
    </>
  );
};

export default InputField;
