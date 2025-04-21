import React from "react";
import Form from "../Molecule/Form";
import TextLinked from "../Atoms/general/TextLinked";

const fields = ["email", "password"];
const Auth = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Form
        labels={fields}
        additionalText={"Forgot password?"}
        formTitle={"Login"}
        additionalLink={
          <>
            Don't Have an account? <TextLinked child={" Sign Up"} />
          </>
        }
      />
    </div>
  );
};

export default Auth;
