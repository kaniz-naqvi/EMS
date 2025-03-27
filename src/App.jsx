import React from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import { useSelector } from "react-redux";
export default function App() {
  const isLogin = useSelector((state) => state.user.isLoggedIn);
  const userName = useSelector((state) => state.user.userName);
  return (
    <>
      <div className="text-center pt-10">
        {!isLogin && <LoginPage />}
        {isLogin && (
          <>
            <h1 className="text-2xl font-semibold">Welcome {userName}!</h1>
            <InputField />
            <TodoList />
          </>
        )}

        <Footer />
      </div>
    </>
  );
}
