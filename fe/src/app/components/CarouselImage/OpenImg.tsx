"use client";
import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
const OpenImg = ({
  currentImg,
  closeImg,
  handleNext,
  handlePrevious
}: {
  currentImg: string;
  closeImg: () => void;
  handleNext: () => void;
  handlePrevious: () => void;
}) => {
  const handleOpen = () => {
    closeImg();
  };
  const handleClickPrevious = () => {
    handlePrevious();
  };
  const handleClickNext = () => {
    handleNext();
  };
  return (
    <div className="fixed z-[100]  cursor-pointer top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <CiCircleRemove
        onClick={handleOpen}
        className="text-[4rem] z-[100]  transition-200 duration-300 ease-in-out text-white  absolute cursor-pointer right-[3rem]  md:right-20 top-[30%] md:top-[10%]  "
      />
      <GrFormPrevious
        onClick={handleClickPrevious}
        className="text-[3rem] hover:bg-black transition-200 duration-300 ease-in-out text-white bg-black/50 absolute cursor-pointer left-10 z-[100] top-[50%]  "
      />
      <div className="lg:mx-auto m-10 shadow-lg bg-white motion-preset-expand motion-duration-500  rounded-lg">
        <img src={currentImg} alt="image" />
      </div>
      <MdNavigateNext
        onClick={handleClickNext}
        className="text-[3rem] text-white bg-black/50 hover:bg-black transition-200 duration-300 ease-in-out absolute cursor-pointer right-10  top-[50%] "
      />
    </div>
  );
};

export default OpenImg;
