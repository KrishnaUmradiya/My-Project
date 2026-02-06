import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  //declaration

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  //logic

  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.terget.name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!loginData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!loginData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (loginData.password.length < 6) {
      newErrors.password = "Minimum 6 character is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const user = JSON.parse(localStorage.getItem("authData"));
      if (
        user.email === loginData.email &&
        user.password === loginData.password
      ) {
        localStorage.setItem("loginData", JSON.stringify(loginData));
        navigate("/dashboard");
      } else {
        alert("invalid email or password");
      }
    } else {
      alert("something went wrong");
    }
  };

  //design
  return (
    <>
      <div className="form-container">
        <h1 className="form-title">Welcome Back</h1>

        <form onSubmit={handleSubmit}>
          {/*email feild */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={loginData.email}
              placeholder="Enter your email"
              onChange={handleInputChange}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={loginData.password}
              placeholder="Enter your password"
              onChange={handleInputChange}
            />
            {errors.password && (
              <span className="error-msg">{errors.password}</span>
            )}
          </div>
          {/*submit button */}
          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>
        {/*link to register page */}
        <p className="link-text">
          Don't have an accout? <Link to="/register">Register Here</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
