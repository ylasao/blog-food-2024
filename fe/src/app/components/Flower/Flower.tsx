import React from "react";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
const Flower = ({
  image,
  className,
}: {
  image: StaticImageData;
  className?: string;
}) => {
  return (
    <>
      <div className={clsx("justify-center flex -my-10", className)}>
        <Image src={image} alt="img-flower" className=" w-[300px]" />
      </div>
    </>
  );
};

export default Flower;
