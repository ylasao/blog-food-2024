"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
// icons
import { MdNavigateNext } from "react-icons/md";
// component

const HeaderVideo = () => {
  const router = useRouter();
  return (
    <header className="">
      <div className="grid items-center  grid-cols-3">
        <div className="col-span-1 p-2 text-center bg-yellow-500/50 text-yellow-600/80 order-2 lg:order-1  border-r-2 border-r-violet-500">
          <Link
            className="uppercase text-[15px] lg:text-[18px] font-semibold"
            href="#"
          >
            Video new
          </Link>
        </div>
        <div className="col-span-1 p-2 text-center bg-emerald-500/50 text-emerald-600/80 order-3 lg:order-2 lg:border-r-2 lg:border-r-yellow-500">
          <Link
            className="uppercase text-[15px] lg:text-[18px] font-semibold"
            href="#"
          >
            Short
          </Link>
        </div>
        <div className="col-span-1 p-2 text-center bg-violet-500/50  text-violet-600/80 order-1 lg:order-3  border-r-2 border-r-emerald-500 lg:border-none">
          <Link
            className="uppercase flex items-center justify-center text-[15px] lg:text-[18px] font-semibold"
            href="/"
          >
            <span className="mr-2 order-2 lg:order-1">back</span>
            <MdNavigateNext className="text-[1.4rem] order-1 rotate-180 lg:rotate-0 lg:order-2" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderVideo;
