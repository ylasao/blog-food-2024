"use client";
import OpenImg from "./OpenImg";
import React from "react";
import { useState } from "react";
const ListImg = ({
  image
}: //   index,
//   arrImg,
{
  image: string[];
  //   index: number;
  //   arrImg: string[];
}) => {
  const [currentImg, setCurrentImg] = useState(image[0]);
  //   console.log(arrImg);
  const [openImg, setOpenImg] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (index: number) => {
    setCurrentImg(image[index]);
    setOpenImg(true);
  };
  const closeImg = () => {
    setOpenImg(false);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % image.length;
    setCurrentIndex(nextIndex);
    setCurrentImg(image[nextIndex]);
  };
  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + image.length) % image.length;
    setCurrentIndex(prevIndex);
    setCurrentImg(image[prevIndex]);
  };
  return (
    <>
      {image.map((item, index) => (
        <div
          onClick={() => handleClick(index)}
          key={index}
          className="flex cursor-pointer justify-center flex-col "
        >
          <img
            alt="img"
            src={item}
            className="m-3  transition-all  motion-preset-slide-right motion-duration-500 motion-delay-[700ms]"
          />
          <h2 className="text-center uppercase font-semibold text-yellow-500">
            Hình ảnh {index + 1}
          </h2>
        </div>
      ))}
      {openImg && (
        <OpenImg
          closeImg={closeImg}
          currentImg={currentImg}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      )}
    </>
  );
};

export default ListImg;
