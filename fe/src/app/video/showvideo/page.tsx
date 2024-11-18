import React from "react";
import ListVideo from "@/app/components/ListVideo/ListVideo";
import CarouselVideo from "@/app/components/CarouselImage/CarouselVideo";
import { url } from "inspector";
import NavVideo from "@/app/components/NavVideo/NavVideo";

const Page = () => {
  return (
    <div>
      <NavVideo />
      <CarouselVideo />
      <ListVideo />
    </div>
  );
};

export default Page;
