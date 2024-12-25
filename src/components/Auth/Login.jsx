import React, { useState } from "react";

export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  //   submit Handler function
  function submitHandler(e) {
    e.preventDefault();
    console.log(email + "\n" + password);
    setemail("");
    setpassword("");
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-red-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            required
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className="border-2 rounded-full border-red-600 py-3 text-xl outline-none mt-2 bg-transparent px-5"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            required
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            className="border-2 rounded-full border-red-600 py-3 text-xl outline-none mt-2 bg-transparent px-5 placeholder:texet-gray-400"
            type="password"
            placeholder="Enter your pasword"
          />
          <button className="rounded-full bg-red-600 py-3 text-xl outline-none mt-2 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
