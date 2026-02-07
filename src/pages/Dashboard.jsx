import React from "react";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";
import QuizForm from "../component/QuizForm";
import QuizList from "../component/QuizList";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authData");
    localStorage.removeItem("loginData");
    navigate("/login");
  };

  return (
    <>
      <Navbar
        title="Quiz Manager"
        onLogout={handleLogout}
        btnAction="Add Quiz"
      />
      <QuizList />
    </>
  );
};

export default Dashboard;
