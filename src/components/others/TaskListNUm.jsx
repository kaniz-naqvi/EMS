import React from "react";

const list = [
  {
    class: "p-10 w-[45%] bg-red-400 rounded-xl",
    number: "0",
    heading: "New Task",
  },
  {
    class: "p-10 w-[45%] bg-blue-400 rounded-xl",
    number: "0",
    heading: "Accepted",
  },
  {
    class: "p-10 w-[45%] bg-green-400 rounded-xl",
    number: "0",
    heading: "Completed",
  },
  {
    class: "p-10 w-[45%] bg-yellow-400 rounded-xl",
    number: "0",
    heading: "Failed",
  },
];

export const TaskListNUm = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-between mt-10 gap-5">
      {list.map((li, index) => {
        return (
          <div key={index} className={li.class}>
            <div className="text-2xl font-bold">
              {li.number}
              <br />
              {li.heading}
            </div>
          </div>
        );
      })}
    </div>
  );
};
