"use client";
import React from "react";
import { IoReturnDownBack } from "react-icons/io5";
import { useRouter } from "next/router";
const Goback = () => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <button
      onClick={handleBack}
      className="flex items-center px-5 font-bold motion-preset-confetti text-yellow-600  my-5"
    >
      <IoReturnDownBack className="text-[1.3rem] mr-2" />
      <span>go back</span>
    </button>
  );
};

export default Goback;
