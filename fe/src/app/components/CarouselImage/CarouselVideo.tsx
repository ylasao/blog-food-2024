"use client";
import Image from "next/image";
import React, { ImgHTMLAttributes, useState } from "react";
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
import { MdSlowMotionVideo } from "react-icons/md";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import { StaticImageData } from "next/image";
import { list } from "postcss";
import clsx from "clsx";
interface Video {
  id: number;
  video: StaticImageData;
}
const listVideo: Video[] = [
  { id: 1, video: video1 },
  { id: 2, video: video2 },
  { id: 3, video: video3 },
  { id: 4, video: video4 },
  { id: 5, video: video5 },
  { id: 6, video: video6 },
  { id: 7, video: video7 },
  { id: 8, video: video8 },
  { id: 9, video: video9 },
  { id: 10, video: video10 }
];

const CarouselVideo = () => {
  const [currentVideo, setCurrentVideo] = useState(listVideo.slice(0, 3));
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    if (currentIndex < listVideo.length - 2) {
      setCurrentIndex(currentIndex + 1);
      setCurrentVideo(listVideo.slice(currentIndex, currentIndex + 3));
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentVideo(listVideo.slice(currentIndex - 1, currentIndex + 2));
    }
  };
  return (
    <>
      <section className="relative motion-preset-rebound-down motion-delay-[500ms]">
        <GrCaretPrevious
          onClick={handlePrev}
          className="text-[2rem] lg:text-[4rem] absolute top-[50%] left-0  cursor-pointer z-10 translate-y-[-50%] text-white p-2 bg-black/60 hover:bg-black transition-all duration-300"
        />
        <GrCaretNext
          onClick={handleNext}
          className="text-[2rem] lg:text-[4rem] absolute top-[50%] right-0 cursor-pointer z-10 translate-y-[-50%] text-white p-2 bg-black/60 hover:bg-black transition-all duration-300"
        />
        <div className=" grid grid-cols-1 lg:grid-cols-3">
          {currentVideo.map((videos, index) => {
            return (
              <div key={videos.id} className="relative group/img">
                <Image
                  className={`group-hover/img:opacity-100 duration-200 transition-all ${
                    index === 1 ? "opacity-100" : "opacity-40"
                  }`}
                  src={videos.video}
                  alt="video demo navbar"
                />
                <MdSlowMotionVideo
                  className={` ${
                    index !== 1 ? "" : "hover:text-yellow-500 hover:rotate-180"
                  } text-[4rem] translate-x-[-50%] cursor-pointer  translate-y-[-50%] text-slate-700  hidden  group-hover/img:block  absolute    transition-all duration-300 ease-in-out group-hover/img:top-[50%] left-[50%]`}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CarouselVideo;
