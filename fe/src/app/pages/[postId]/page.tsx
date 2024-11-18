import React, { useState } from "react";
import data from "@/app/data/dataMock.json";
import WrapContainer from "@/app/components/WrapContainer";
import Flower from "@/app/components/Flower/Flower";
import img4 from "../../../../public/flower-4.png";
import Link from "next/link";
import Rating from "@/app/components/rating/Rating";

import CarouselImage from "@/app/components/CarouselImage/CarouselImage";
import ListImg from "@/app/components/CarouselImage/ListImg";
import Direction from "@/app/components/Direction/Direction";
import Ingredient from "@/app/components/Ingredient/Ingredient";
import TimeCook from "@/app/components/TimeCook/TimeCook";
import ShareSocal from "@/app/components/ShareSocal/ShareSocal";
import SharePost from "@/app/components/ShareSocal/SharePost";
import Author from "@/app/components/Author/Author";
import NumberRating from "@/app/components/rating/NumberRating";
import TitleMain from "@/app/components/TitleMain/TitleMain";
import Goback from "@/app/components/Back/Goback";
const PostId = async ({ params }: { params: { postId: string } }) => {
  const { postId } = await params;
  const post = data.categories
    .flatMap((cate) => cate.posts)
    .find((post) => post.slug.toLowerCase() === postId.toLowerCase());
  // const [currentImage, setCurrentImage] = useState(post?.mediaGallery[0]);
  const arr: string[] = [];
  const createArrImg = post?.mediaGallery.map((item) => {
    return arr.push(item);
  });
  return (
    <>
      <WrapContainer>
        {/* image flower */}
        <Goback />
        <div className="header hidden lg:block">
          <Flower image={img4} className="mt-6" />
        </div>
        <div>
          {/* title main */}
          <TitleMain title={post?.title} />
          {/* author */}
          <Author name={post?.author.name} datePublic={post?.datePublic} />
          {/* number view rating */}
          <NumberRating ratings={post?.ratings} views={post?.viewCount} />
          {/* share socal */}
          <ShareSocal />
          {/* image */}
          <div className="m-8 gap-4 grid lg:grid-cols-2  flex-col group/img relative ">
            <ListImg image={arr} />
          </div>
          {/* share socal */}
          <div className="social motion-preset-slide-right motion-duration-500 grid-cols-1 my-10 grid lg:grid-cols-2">
            <SharePost image={post?.image} />
            <ShareSocal />
          </div>
        </div>
        {/* rating */}
        <section className="rate motion-delay-[1000ms]">
          <Rating />
        </section>
        {/* time cook */}
        <TimeCook
          prepTime={post?.prepTime}
          cookTime={post?.cookTime}
          serving={post?.serving}
        />
        {/* ingredient */}
        <div className="mb-10 motion-preset-slide-right motion-duration-500 p-4 motion-delay-[1200ms]">
          <TitleMain title="Ingredient" className="lg:text-left" />
          <ul className="mt-3">
            {post?.ingredients.map((item, index) => (
              <Ingredient
                index={index}
                quantity={item.quantity}
                ingredient={item.ingredient}
              />
            ))}
          </ul>
        </div>
        {/* direction */}
        <div className="direction  p-4 mb-10  ">
          <TitleMain title="Direction" className="lg:text-left" />
          <div className="motion-preset-slide-right motion-duration-500 motion-delay-[1400ms]">
            <ol>
              {post?.direction.map((item, index) => {
                return (
                  <Direction
                    index={index}
                    step={item.step}
                    instruction={item.instruction}
                  />
                );
              })}
            </ol>
          </div>
        </div>
        <h2 className="text-slate-400 font-semibold text-center motion-preset-slide-right motion-duration-500 motion-delay-[1500ms] ">
          Tag:
          {post?.tag.map((item, index) => (
            <span
              className="mx-2 text-yellow-600 text-ls font-semibold"
              key={index}
            >
              {item}
            </span>
          ))}
        </h2>
        {/* show review */}
      </WrapContainer>
    </>
  );
};

export default PostId;
