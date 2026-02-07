import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ title, onLogout, btnAction }) => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>{title}</h1>
        </div>
        <div className="navbar-action">
          <button className="btn-primary">
            <Link to="/quizform" className="link-text">
              {btnAction}
            </Link>
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
