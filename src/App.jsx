import React from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="text-center pt-10">
        <h1 className="text-2xl font-semibold">Going to start with Redux</h1>
        <InputField />
        <TodoList />
        <Footer />
      </div>
    </>
  );
}
