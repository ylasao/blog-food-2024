"use client";
import React from "react";
import { useState } from "react";
import Login from "../login/Login";
const JoinNow = () => {
  const [handle, setHandle] = useState(false);
  const handleLogin = () => {
    setHandle(!handle);
  };
  return (
    <div className="ml-4 text-slate-600    lg:text-sm lg:font-semibold  text-sm hover:cursor-pointer join">
      <button
        onClick={handleLogin}
        className="text-slate-600 lg:text-sm lg:font-semibold   text-sm hover:cursor-pointer motion-preset-rebound-down motion-delay-[1000ms]"
      >
        Login
      </button>
      {handle && <Login handle={handle} />}
    </div>
  );
};

export default JoinNow;
