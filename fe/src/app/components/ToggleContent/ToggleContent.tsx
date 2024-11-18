"use client";
import React from "react";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import Link from "next/link";
const ToggleContent = ({
  title,
  content,
}: {
  title: string;
  content: string[];
}) => {
  const [showContentFooter, setShowContentFooter] = useState(false);

  return (
    <div className="footer-column my-7">
      <div
        onClick={() => setShowContentFooter(!showContentFooter)}
        className="show-content pb-2 cursor-pointer border-b border-b-white/80 transition-all duration-300  flex items-center justify-between"
      >
        <button className="text-white uppercase text-sm font-semibold md:text-[16px]">
          {title}
        </button>
        <FiMinus className="lg:hidden text-white" />
      </div>
      <div
        className={`lg:hidden content transition-all ease-in-out duration-500 mt-4`}
      >
        {showContentFooter && (
          <ul className="block">
            {content.map((item, index) => {
              return (
                <li
                  key={index}
                  className="hover:translate-x-2 transition-all duration-300"
                >
                  <Link
                    className="lg:text-[15px] lg:by-2 capitalize text-white text-[12px]"
                    href="#"
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div
        className={`hidden lg:block content transition-all ease-in-out duration-500 mt-4`}
      >
        <ul className="block">
          {content.map((item, index) => {
            return (
              <li
                key={index}
                className="hover:translate-x-2 transition-all duration-300"
              >
                <Link
                  className="lg:text-[15px] lg:by-2 capitalize text-white text-[12px]"
                  href="#"
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ToggleContent;
