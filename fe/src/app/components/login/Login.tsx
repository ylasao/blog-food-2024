"use client";
import React from "react";
import { CiCircleRemove } from "react-icons/ci";
import { useState } from "react";

const Login = ({ handle }: { handle: boolean }) => {
  const [openCreateAccount, setOpenCreateAccount] = useState(handle);
  const [openLogin, setOpenLogin] = useState(false);
  const handleClick = () => {
    setOpenCreateAccount(!handle);
  };
  return (
    <>
      {openCreateAccount && (
        <div className=" popup_login fixed w-full h-full z-[100] overflow-auto top-0 left-0  bg-slate-300/50 ">
          <div className="bg-white relative shadow-slate-300/80 shadow-md lg:h-[660px]  lg:w-[900px]  w-[400px] mx-auto my-[15%] z-[100] motion-preset-expand motion-duration-500 ">
            <div className="form grid lg:grid-cols-2 grid-cols-1 p-[50px]">
              {openLogin === true ? (
                <>
                  <div className="flex mt-[30px] lg:mt-[150px] justify-center">
                    <div className="hidden lg:block">
                      <h2 className="text-blue-950 py-4 text-[24px] font-semibold">
                        Create account
                      </h2>
                      <p className="text-slate-500 text-[14px]">
                        Not a member yet? Create a free account to unlock
                        <br />
                        exclusive benefits and more!
                      </p>
                      <input
                        onClick={() => setOpenLogin(false)}
                        className="px-5 mt-5 uppercase hover:bg-blue-950  transition-all duration-300 border border-slate-300  cursor-pointer  bg-white hover:text-white text-slate-500 text-[20px] py-3"
                        type="submit"
                        value="Join now"
                      />
                    </div>
                  </div>
                  <div className="flex mt-10 lg:mt-[50px] justify-center">
                    <div className="">
                      <h2 className="text-blue-950 py-4 text-[24px] font-semibold">
                        Log in
                      </h2>
                      <p className="text-slate-500 text-[14px]">
                        Already have a Food52 account?
                        <br />
                        Log in here!
                      </p>
                      <form action="#" className="mt-5">
                        <div className="group flex flex-col">
                          <label
                            htmlFor="email"
                            className="text-slate-500 mb-2"
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            placeholder=""
                            className="p-4 outline-none  text-slate-500  border border-slate-300 hover:border-slate-500 duration-200 transition-all"
                          />
                        </div>
                        <div className="group flex flex-col">
                          <label
                            htmlFor="password"
                            className="text-slate-500 mb-2"
                          >
                            Password *
                          </label>
                          <input
                            type="password"
                            placeholder=""
                            className="p-4 outline-none  text-slate-500  border border-slate-300 hover:border-slate-500 duration-200 transition-all"
                          />
                        </div>
                        <input
                          className="px-5 mt-5 uppercase hover:bg-blue-950/80 transition-all duration-300 cursor-pointer  bg-blue-950 text-white text-[20px] py-3"
                          type="submit"
                          value="Login"
                        />
                      </form>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="mt-10  lg:pr-[50px] lg:border-r lg:border-r-slate-300">
                    <h2 className="text-blue-950 py-4 text-[24px] font-semibold">
                      Create an Account
                    </h2>
                    <p className="text-slate-500 text-[12px]">
                      Unlock access to The Table rewards for first dibs on sales
                      & new arrivals—plus, 20 points on us!
                    </p>
                    <ol className=" hidden lg:block mt-5">
                      <li className="my-2 text-[13px] lg:text-[15px]  text-slate-500">
                        Join The Table for member-only rewards
                      </li>
                      <li className="my-2 text-[13px] lg:text-[15px]  text-slate-500">
                        View and save thousands of recipes
                      </li>
                      <li className="my-2 text-[13px] lg:text-[15px]  text-slate-500">
                        Submit and review recipes
                      </li>
                      <li className="my-2 text-[13px] lg:text-[15px]  text-slate-500">
                        Get exclusive offers and rewards
                      </li>
                      <li className="my-2 text-[13px] lg:text-[15px]  text-slate-500">
                        Receive early access to new arrivals
                      </li>
                    </ol>
                    <form action="#" className="mt-5">
                      <div className="group flex flex-col">
                        <label htmlFor="email" className="text-slate-500 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          placeholder=""
                          className="p-4 outline-none  text-slate-500  border border-slate-300 hover:border-slate-500 duration-200 transition-all"
                        />
                      </div>
                      <input
                        className="px-5 mt-5 uppercase hover:bg-blue-950/80 transition-all duration-300 cursor-pointer  bg-blue-950 text-white text-[20px] py-3"
                        type="submit"
                        value="join now"
                      />
                    </form>
                  </div>
                  <div className="  mt-8 lg:mt-[150px] lg:flex justify-center">
                    <div className="">
                      <h2 className="text-blue-950 hidden lg:block lg:py-4 text-[24px] font-semibold">
                        Log in
                      </h2>
                      <p className="text-slate-500 text-[14px]">
                        Already have a Food52 account?
                        <br />
                        Log in here!
                      </p>
                      <input
                        onClick={() => setOpenLogin(true)}
                        className="px-5 mt-5 uppercase hover:bg-blue-950  transition-all duration-300 border border-slate-300  cursor-pointer  bg-white hover:text-white text-slate-500 text-[20px] py-3"
                        type="submit"
                        value="Login"
                      />
                    </div>
                  </div>
                </>
              )}
              <CiCircleRemove
                onClick={handleClick}
                className="absolute top-10 text-[3rem] text-slate-500 cursor-pointer right-10 "
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
