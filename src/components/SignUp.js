import React from "react";
// import "./style.css";
import "../style.css";

export const SignUp = () => {
  return (
    <div className="macbook-pro">
      <div className="div">
        <img className="element" alt="Element" src="1-1.png" />
        <div className="text-wrapper">Sign Up</div>
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper-2">Email</div>
        </div>
        <div className="overlap">
          <div className="rectangle-2" />
          <div className="text-wrapper-3">Password</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-4">First Name</div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-5">Last Name</div>
        </div>
        <div className="overlap-3">
          <div className="rectangle-3" />
          <div className="text-wrapper-6">Create Account</div>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-7">Already have an account?</div>
          <div className="text-wrapper-8">Sign In</div>
        </div>
      </div>
    </div>
  );
};
