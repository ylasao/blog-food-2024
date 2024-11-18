"use client";
import React from "react";
import clsx from "clsx";
// interface Post {
//   categories: {
//     id: number;
//     name: string;
//     title: string;
//     posts: {
//       id: number;
//       title: string;
//       description: string;
//       image: string;
//       mediaGallery: string[];
//       prepTime: string;
//       cookTime: string;
//       serving: number;
//       tag: string[];
//       videoUrl?: string;
//       author: {
//         name: string;
//         profileLink: string;
//         bio: string;
//       };
//       ingredients: {
//         quantity: string;
//         ingredient: string;
//         note?: string;
//       }[];
//       direction: {
//         step: number;
//         instruction: string;
//       }[];
//       datePublic: string;
//       lastModified: string;
//       likeCount: number;
//       commentCount: number;
//       viewCount: number;
//       ratings: number;
//       comments: {
//         userId: number;
//         timestamp: string;
//         content: string;
//       }[];
//       metaDescription: string;
//       publicStart: string;
//     }[];
//   }[];
// }
const RecipeHeader = ({
  name,
  title,
  className,
}: {
  className: string;
  name: string;
  title: string;
}) => {
  return (
    <>
      <div className={clsx("title-name my-10", className)}>
        <h2 className="text-slate-900/8 md:font-semibold md:text-[1.9rem] md:text-left text-[1.8rem] text-center">
          {name}
        </h2>
        <p className="text-sm text-center mt-3 md:text-left md:text-[16px]  text-slate-700">
          {title}
        </p>
      </div>
    </>
  );
};

export default RecipeHeader;
