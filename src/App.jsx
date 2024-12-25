import React, { useState } from "react";
import "./App.css";
import { Login } from "./components/Auth/Login";
import { EmployeeBashboard } from "./components/Dashboard/EmployeeBashboard";
import { Header } from "./components/others/Header";
export default function App() {
  return (
    <>
      {/*<Login />*/}

      <EmployeeBashboard />
    </>
  );
}
