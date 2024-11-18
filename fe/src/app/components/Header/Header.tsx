import React, { useState } from "react";
//import components
import WrapContainer from "../WrapContainer";
//import next
import Link from "next/link";
// import icons
import { FaRegCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Login from "../login/Login";
import JoinNow from "./JoinNow";
import Image from "next/image";
import{optimize} from 'svgo'
 
const Header = () => {
  return (
    <WrapContainer className="">
      <header className="mt-6 mx-6">
        <div className="grid items-center grid-cols-6 gap-2 lg:grid-cols-12">
          <div className="lg:order-1 order-4 overflow-hidden lg:col-start-1 lg:col-span-4  menu col-start-1 col-end-7 mt-5 lg:mt-0">
            <ul className="flex justify-center !capitalize lg:justify-start items-center">
              <li className="mr-3 motion-preset-rebound-down motion-delay-[400ms]  lg:mx-2">
                <Link
                  className="lg:text-[14px] lg:font-semibold text-sm hover:text-yellow-600 hover:border-b-2 hover:border-b-yellow-500  duration-300 transition-all  text-slate-500"
                  href="#"
                >
                  Shop
                </Link>
              </li>
              <li className="mr-3 motion-preset-rebound-down motion-delay-[500ms]  lg:mx-2">
                <Link
                  className="lg:text-[14px] lg:font-semibold text-sm hover:text-yellow-600 hover:border-b-2 hover:border-b-yellow-500  duration-300 transition-all  text-slate-500"
                  href="/"
                >
                  Món ăn
                </Link>
              </li>
              <li className="mr-3 motion-preset-rebound-down motion-delay-[600ms]  lg:mx-2">
                <Link
                  className="lg:text-[14px] lg:font-semibold text-sm hover:text-yellow-600 hover:border-b-2 hover:border-b-yellow-500  duration-300 transition-all  text-slate-500"
                  href="/video/showvideo"
                >
                  Video
                </Link>
              </li>
              <li className="mr-3 motion-preset-rebound-down motion-delay-[700ms]  lg:mx-2">
                <Link
                  className="lg:text-[14px] lg:font-semibold text-sm hover:text-yellow-600 hover:border-b-2 hover:border-b-yellow-500  duration-300 transition-all  text-slate-500"
                  href="#"
                >
                  Cộng đồng
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:order-2 motion-preset-rebound-down motion-delay-[800ms] order-1 lg:col-start-5  lg:ml-20 lg:text-center lg:col-span-3 nameBrand capitalize col-start-1 col-end-3 text-yellow-600 font-bold text-[1.8rem]">
            
          </div>
          {/* <div className="lg:order-3 order-3 lg:col-start-8  lg:ml-auto lg:mr-10  mx-10 lg:col-span-3 search col-start-1 col-end-7 mt-3 lg:mt-0">
            <div className="flex justify-between border border-slate-500/30 hover:border-yellow-600   duration-200 transition-all p-2 rounded-3xl">
              <input
                className="lg:hidden w-2/3 text-[17px] text-yellow-600 p-[3px] italic capitalize outline-none leading-6 "
                type="text"
                placeholder="Tìm kiếm tên món ăn"
              />
              <button className="mr-2">
                <CiSearch className="font-bold hover:cursor-pointer" />
              </button>
            </div>
          </div> */}
          <div className="lg:order-4 order-2 uppercase lg:col-start-11 lg:col-span-2 col-start-5 col-end-7  ">
            <div className="flex items-center justify-end">
              <JoinNow />
              <div className="ml-4 text-slate-600 lg:text-sm lg:font-semibold   text-sm hover:cursor-pointer cart">
                <Link
                  className="motion-preset-rebound-down motion-delay-[1100ms]"
                  href="#"
                >
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="hidden lg:block mx-10 mt-10 list-category">
          <div className="">
            <ul className="flex justify-between text-sm  !text-slate-500">
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-700 transition-all duration-300"
                >
                  Popular
                </Link>
              </li>
              <li>
                <Link
                  href="#salad"
                  className="hover:text-yellow-700 transition-all duration-300"
                >
                  Salad
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-700 transition-all duration-300"
                >
                  Meals & Dishes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-700 transition-all duration-300"
                >
                  Diets
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-700 transition-all duration-300"
                >
                  Occasion
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-700 transition-all duration-300"
                >
                  Tools & Techniques
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-700 transition-all duration-300"
                >
                  Videos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-700 transition-all duration-300"
                >
                  Resident
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-700 transition-all duration-300"
                >
                  Contents
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-700 transition-all duration-300"
                >
                  Add Recipe
                </Link>
              </li>
            </ul>
          </div>
        </div> */}
      </header>
    </WrapContainer>
  );
};

export default Header;

//1-4 col3 1-2-3
//4-6 col2 4-5
//6-9 cols3 6-7-8
//9-13 col4 9-10-11-12
