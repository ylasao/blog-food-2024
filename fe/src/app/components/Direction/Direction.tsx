"use client";
import React from "react";
import { useState } from "react";
const Direction = ({
  index,
  step,
  instruction,
}: {
  index: number;
  step: number;
  instruction: string;
}) => {
  const [isExspanded, setIsExspanded] = useState(false);

  return (
    <div
      key={index}
      onClick={() => setIsExspanded(!isExspanded)}
      className="flex my-4 group/direction cursor-pointer items-start"
    >
      <span className="font-semibold px-3 py-1 mr-4 border group-hover/direction:bg-slate-500  group-hover/direction:text-white duration-300 transition-all border-slate-500 rounded-full text-[1rem] text-slate-800">
        {step}
      </span>
      <article className="text-[18px]  lg:text-lg text-slate-500">
        {isExspanded ? instruction : `${instruction.slice(0, 150)}`}
        <span className="text-sm text-yellow-600 font-semibold">
          {isExspanded ? "" : " ....See more"}
        </span>
      </article>
    </div>
  );
};

export default Direction;
