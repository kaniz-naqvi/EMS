import React, { useState } from "react";

const InputField = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <form className="p-10">
        <input
          type="text"
          placeholder="What is in your mind..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add +</button>
      </form>
    </>
  );
};

export default InputField;
