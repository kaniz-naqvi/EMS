import React from "react";
import { TaskListNUm } from "../others/TaskListNUm";
import { Header } from "../others/Header";
export const EmployeeBashboard = () => {
  return (
    <div className="bg-[#1C1C1C] h-screen p-10">
      <Header />
      <TaskListNUm />
    </div>
  );
};
