import React from "react";
import Input from "../Atoms/general/Input";
import capitalizeFirstLetter from "../Atoms/Functions/CapitalFirstLetter";
import Button from "../Atoms/general/Button";
import TextLinked from "../Atoms/general/TextLinked";

const Form = ({
  labels = ["name"],
  formTitle = "Form",
  additionalText = "Additional",
  additionalLink = "Additional Link",
}) => {
  return (
    <div className=" border flex flex-col p-3 py-5 border-lime-100 lg:w-1/3 md:w-1/2 w-full mx-5 rounded-md">
      <h2 className="text-center text-3xl font-semibold text-primary">
        {formTitle}
      </h2>
      {labels.map((labelName, index) => {
        return (
          <label htmlFor={labelName} className="py-1" key={index}>
            <span className="text-lg">{capitalizeFirstLetter(labelName)}</span>
            <Input
              type={labelName}
              placeholder={"Enter " + capitalizeFirstLetter(labelName)}
            />
          </label>
        );
      })}
      {additionalText && <TextLinked child={additionalText} />}
      <Button text={"Login"} type={"submit"} />
      {additionalLink && <span className="mt-2">{additionalLink}</span>}
    </div>
  );
};

export default Form;
