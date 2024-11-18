import React from "react";
import { IoIosStar } from "react-icons/io";
interface StarRantingProps {
  count: number;
}
const StarRanting = ({ count }: StarRantingProps) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: count }).map((_, index) => {
        return (
          <IoIosStar
            key={index}
            className="px-1 w-7 h-7 cursor-pointer  text-yellow-500  hover:text-yellow-900  duration-300 transition-all"
          />
        );
      })}
    </div>
  );
};

export default StarRanting;
