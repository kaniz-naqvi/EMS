import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo } from "../store/todoSlice";
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <div className="px-7 mt-5">
      <ul>
        {todos.map((item) => (
          <li
            key={item.id}
            className="text-left p-4 border-b text-lg border-slate-400 lg:mx-56 flex items-center justify-between"
          >
            {item.text}
            <div>
              <button
                onClick={() => dispatch(editTodo(item.id, item.text))}
                className="bg-green-500 text-white p-1 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(removeTodo(item.id))}
                className="bg-red-500 text-white p-1 ms-1 rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
