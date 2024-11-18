import React from "react";
import Image, { StaticImageData } from "next/image";
interface ImageComponentsProps {
  src: string;
  alt: string;
}

const ImageComponents = ({ src, alt }: ImageComponentsProps) => {
  return (
    <div className="overflow-hidden ">
      <img
        alt={alt}
        className="object-cover opacity-80 hover:opacity-100 hover:scale-125 duration-500 transition-all"
        src={src}
      />
    </div>
  );
};

export default ImageComponents;
