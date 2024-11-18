"use client";
// import React
import { useState, useEffect } from "react";
import React from "react";
// import Next provide
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
// import image or video from folder public
import imagePost from "../../../../public/dish-1.webp";
// import icons react
import { WiSnow } from "react-icons/wi";
//data
import data from "../../data/dataMock.json";
// import components child post
import ImageComponents from "./ImageComponents";
import SaveBnt from "./SaveBnt";
import StarRanting from "./StarRanting";
import TextNamePost from "./TextNamePost";
import RecipeHeader from "../RecipeHeader/RecipeHeader";
import ViewAll from "../viewAll/ViewAll";
const CartPost = () => {
  const category = data;
  const [width, setWidth] = useState(window.innerWidth);
  // innerWidth : property is read-only
  // and return width of the window's content area.
  const [visiblePost, setVisiblePost] = useState(
    category.categories.map((item) => item.posts.slice(0, 4))
  );
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      // use ex :here is i use property innerWidth => width ,we can use many options =>  outerWidth or clientWidth ...
    };
    window.addEventListener("resize", handleResize);
    // event resize in js fn call when the browser window is resize;
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //run only on the first render
  useEffect(() => {
    if (width < 768) {
      setVisiblePost(category.categories.map((item) => item.posts.slice(0, 4)));
    } else if (width < 1024) {
      setVisiblePost(category.categories.map((item) => item.posts.slice(0, 3)));
    } else {
      setVisiblePost(category.categories.map((item) => item.posts.slice(0, 4)));
    }
  }, [width]);

  return (
    <>
      {/* <RecipeHeader category={category} /> */}
      {category.categories.map((item, categoryIndex) => {
        return (
          <div key={categoryIndex} id="#salad" className="gird">
            <RecipeHeader
              name={item.name}
              title={item.title}
              className="order-1"
            />
            <div className="mt-10 md:order-3 order-2">
              <div className="content-container-post">
                <ul className="grid gap-3 md:grid-cols-3 lg:grid-cols-4 grid-cols-2">
                  {visiblePost[categoryIndex].map((post, index) => (
                    <li
                      className="motion-preset-expand motion-duration-300   motion-delay-[2500ms]"
                      key={post.id}
                    >
                      <Link href={`/pages/${post.slug.toLowerCase()}`}>
                        <ImageComponents
                          src={post.image}
                          alt={post.description}
                        />
                        <TextNamePost name={post.title} limit={30} />
                      </Link>
                      <StarRanting count={5} />
                      <SaveBnt />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ViewAll
              category={item.name}
              categoryId={item.id}
              className="order-3 md:order-2"
            />
          </div>
        );
      })}
    </>
  );
};

export default CartPost;
