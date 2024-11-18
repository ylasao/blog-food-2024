"use client";
import next from "next";
import React, { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import OpenImg from "./OpenImg";
const CarouselImage = ({ listImage }: { listImage: string[] | undefined }) => {
  const [currentImg, setCurrentImg] = useState(listImage && listImage[0]);
  const [numberImg, setNumberImg] = useState(0);
  const [showImg, setShowImg] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const handleNext = () => {
  //     const nextIndex =
  //       currentImg && currentImg + 1 % listImage?.length|undefined;
  //   };
  return <></>;
};

export default CarouselImage;
