import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

const InputField = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(input));
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
          className="bg-blue-700 text-white rounded-md lg:ms-2 p-3 mt-2 lg:w-auto w-[90%]"
        >
          Add +
        </button>
      </form>
    </>
  );
};

export default InputField;
