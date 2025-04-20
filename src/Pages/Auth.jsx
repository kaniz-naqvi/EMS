import React from "react";
import Form from "../Molecule/Form";

const fields = ["name", "email", "password"];
const Auth = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Form labels={fields} formTitle={"Login"} />
    </div>
  );
};

export default Auth;
