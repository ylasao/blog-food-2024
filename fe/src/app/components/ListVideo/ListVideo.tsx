import React from "react";
import Image from "next/image";
import video1 from "../../../../public/video/video1.png";
import video2 from "../../../../public/video/video2.png";
import video3 from "../../../../public/video/video3.png";
import video4 from "../../../../public/video/video4.png";
import video5 from "../../../../public/video/video5.png";
import video6 from "../../../../public/video/video6.png";
import video7 from "../../../../public/video/video7.png";
import video8 from "../../../../public/video/video8.png";
import video9 from "../../../../public/video/video9.png";
import video10 from "../../../../public/video/video10.png";
import { FaPlus } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { IoPlaySharp } from "react-icons/io5";
import Link from "next/link";
const ListVideo = () => {
  return (
    <section className="">
      <div className="grid grid-cols-12 motion-preset-rebound-down motion-delay-[600ms]">
        <h2 className="text-sm  text-yellow-600/80  col-span-full font-semibold m-5 lg:text-[1.5rem] uppercase">
          Video New
        </h2>
        <div className="col-span-12 rounded-lg bg-yellow-500/50">
          <div className="grid lg:grid-cols-5 grid-cols-2 gap-2 p-2">
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video10}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border motion-preset-confetti    rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className=" text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="hidden lg:block border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="hidden  border lg:flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video9}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video8}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video7}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video6}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video5}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video4}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video3}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video2}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video1}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 motion-preset-rebound-down motion-delay-[700ms]">
        <h2 className="text-sm  text-yellow-600/80  col-span-full font-semibold m-5 lg:text-[1.5rem] uppercase">
          Video New
        </h2>
        <div className="col-span-12 rounded-lg bg-yellow-500/50">
          <div className="grid lg:grid-cols-5 grid-cols-2 gap-2 p-2">
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video10}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video9}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video8}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video7}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video6}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video5}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video4}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video3}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video2}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video1}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 motion-preset-rebound-down motion-delay-[800ms]">
        <h2 className="text-sm  text-yellow-600/80  col-span-full font-semibold m-5 lg:text-[1.5rem] uppercase">
          Video New
        </h2>
        <div className="col-span-12 rounded-lg bg-yellow-500/50">
          <div className="grid lg:grid-cols-5 grid-cols-2 gap-2 p-2">
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video10}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video9}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video8}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video7}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video6}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video5}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video4}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video3}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video2}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="boxWrap group/imgBox motion-preset-shake motion-duration-500 relative overflow-hidden">
              <Image
                className="rounded-lg hover:scale-110 duration-300  transition-300 cursor-pointer"
                src={video1}
                alt="show demo"
              />
              <div className="transition-all duration-300 absolute w-full bottom-0  left-[50%] bg-black/80 opacity-0 translate-x-[-50%] text-center group-hover/imgBox:opacity-100  ">
                <Link
                  href="/video/detail"
                  className="flex items-center text-[16px] justify-center p-[10px] active:bg-slate-700 w-[100%] rounded-md  text-black cursor-pointer font-semibold"
                >
                  <div className="div border rounded-full flex items-center  border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <IoPlaySharp className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Play
                    </span>
                  </div>
                  <div className="border rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <FaPlus className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                  </div>
                  <div className="div border flex items-center rounded-full border-slate-500 p-2 m-2 shadow-slate-500 hover:border-white group/btn duration-300 transition-all shadow">
                    <AiFillLike className="lg:w-5 lg:h-5 w-3 h-3 text-slate-500 group-hover/btn:text-white duration-300 transition-all  m-2" />
                    <span className="text-slate-500 duration-300 transition group-hover/btn:text-white group-hover/btn:block hidden group-hover/btn:opacity-100 opacity-0">
                      Thích
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListVideo;
