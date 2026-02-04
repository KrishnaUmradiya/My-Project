import React from "react";
import "./Register.css";
const Register = () => {
  return (
    //declaration
    //logic
    //design
    <>
      <div className="form-container">
        <h1 className="form-title">REGISTER</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your mobile number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Creat a password"
            />
          </div>
          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>
        <p className="link-text">Already have an account? Login Here</p>
      </div>
    </>
  );
};

export default Register;
