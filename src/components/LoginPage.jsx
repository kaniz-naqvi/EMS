import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLogIn } from "../store/userSlice";
const LoginPage = () => {
  const dispatch = useDispatch();

  const [field, setField] = useState({ name: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setField((prevField) => ({
      ...prevField,
      [name]: value,
    }));
  };
  function handleLogIn(e) {
    const { name, password } = field;
    e.preventDefault();
    dispatch(setLogIn({ name: name, password: password }));
    setField({ name: "", password: "" });
  }
  return (
    <>
      <form
        onSubmit={(e) => handleLogIn(e)}
        className="flex flex-col items-center gap-5 min-h-[82dvh]"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={field.name}
          onChange={(e) => handleChange(e)}
          className="border rounded-md p-3 lg:w-96  w-[90%]"
        />

        <input
          type="text"
          name="password"
          placeholder="password"
          value={field.password}
          onChange={(e) => handleChange(e)}
          className="border rounded-md p-3 lg:w-96  w-[90%]"
        />
        <button
          type="submit"
          className="text-white rounded-md lg:ms-2 p-3  lg:w-96 mt-2 w-[90%]  bg-blue-500"
        >
          Log in
        </button>
      </form>
    </>
  );
};

export default LoginPage;
