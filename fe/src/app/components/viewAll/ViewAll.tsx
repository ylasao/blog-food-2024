"use client";
import React from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import clsx from "clsx";
import { useRouter } from "next/navigation";
const ViewAll = ({
  className,
  category,
  categoryId
}: {
  className: string;
  category: string;
  categoryId: number;
}) => {
  const router = useRouter();
  return (
    <div
      className={clsx(
        "flex justify-center my-10 motion-preset-rebound-down motion-delay-[2700ms]",
        className
      )}
    >
      <button
        onClick={() =>
          router.push(`/pages/recipe/${category}`, { scroll: false })
        }
        className="flex items-center"
      >
        <span className="text-yellow-600 hover:text-yellow-800 transition-all duration-300 uppercase  text-sm mr-2">
          View All recipes
        </span>
        <MdKeyboardArrowRight className="text-yellow-600" />
      </button>
    </div>
  );
};

export default ViewAll;
