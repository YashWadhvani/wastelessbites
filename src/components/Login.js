import React from "react";
import "../login.css";

export const Login = () => {
  return (
    <div className="macbook-pro">
      <div className="div">
        <img className="element" alt="Element" src="1-1.png" />
        <div className="text-wrapper">Login</div>
        <div className="overlap">
          <div className="rectangle" />
          <div className="text-wrapper-2">Email</div>
        </div>
        <div className="overlap-group">
          <div className="text-wrapper-3">Password</div>
        </div>
        <div className="overlap-group-2">
          <div className="rectangle-2" />
          <div className="text-wrapper-4">Login</div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-5">Don’t have an account?</div>
          <div className="text-wrapper-6">Create</div>
        </div>
      </div>
    </div>
  );
};
