import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ title, onLogout,onAddQuizBtnClick,isFormOpen }) => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>{title}</h1>
        </div>
        <div className="navbar-action">
          <button className={isFormOpen ? "btn-secondary" : "btn-primary"} onClick={onAddQuizBtnClick}>
            {isFormOpen ? "Close" : "Add Quiz"}
          </button>
          <button className="btn-secondary" onClick={onLogout}>
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
