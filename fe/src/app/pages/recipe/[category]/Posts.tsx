"use client";
import React from "react";
import { useState, useEffect } from "react";
import WrapContainer from "@/app/components/WrapContainer";
import data from "../../../data/dataMock.json";
import Link from "next/link";
import ImageComponents from "@/app/components/ShowPost/ImageComponents";
import TextNamePost from "@/app/components/ShowPost/TextNamePost";
import StarRanting from "@/app/components/ShowPost/StarRanting";
import SaveBnt from "@/app/components/ShowPost/SaveBnt";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import "./Post.css";
interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  mediaGallery: string[];
  prepTime: string;
  cookTime: string;
  serving: number;
  slug: string;
  tag: string[];
  videoUrl?: string;
  author: {
    name: string;
    profileLink: string;
    bio: string;
  };
  ingredients: {
    quantity: string;
    ingredient: string;
    note?: string;
  }[];
  direction: {
    step: number;
    instruction: string;
  }[];
  datePublic: string;
  lastModified: string;
  likeCount: number;
  commentCount: number;
  viewCount: number;
  ratings: number;
  comments: {
    userId: number;
    timestamp: string;
    content: string;
  }[];
  metaDescription: string;
  publicStart: string;
}
const Posts = ({ category }: { category: string }) => {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [content, setContent] = useState("");
  const [valueSearch, setValueSearch] = useState("");
  const [filterPost, setFilterPost] = useState<Post[]>([]);
  const [text, setText] = useState("");
  useEffect(() => {
    if (category) {
      const categoryPosts =
        data.categories.find((cate) => cate.name === category)?.posts || [];
      const content =
        data.categories.find((cate) => cate.name === category)?.title || "";
      setPosts(categoryPosts);
      setFilterPost(categoryPosts);
      setContent(content);
    }
  }, [category]);
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    setValueSearch(search);
    const filter = posts.filter((post) =>
      post.title.toLowerCase().includes(valueSearch.toLowerCase())
    );
    setFilterPost(filter);
  };

  return (
    <>
      <WrapContainer>
        <div className="my-10">
          <div
            onClick={() => router.push("/")}
            className="flex cursor-pointer  items-center text-yellow-700"
          >
            <IoMdArrowRoundBack className="mr-3 text-sm" />
            <span>Back</span>
          </div>
          <h2 className="font-semibold text-slate-600 text-[1.9rem] text-center uppercase">
            {category}
          </h2>
          <p className="text-center text-[16px] text-slate-600">{content}</p>
        </div>
        <div className="  lg:col-span-3 search col-start-1 col-end-7 mt-3 lg:mt-0">
          <div className="flex justify-between border items-center border-slate-500/30 hover:border-yellow-600 w-[700px] mx-auto duration-200 transition-all py-2 px-5  ">
            <input
              value={valueSearch}
              onChange={handleFilter}
              className="w-[90%]  order-1  text-[17px] text-yellow-600 p-[4px] italic capitalize outline-none leading-6 "
              type="text"
              placeholder="Mon an ?"
            />
            <div className="w-[10%] lg:ml-10 order-2 font-be-vietnam-pro font-semibold cursor-pointer active:translate-x-1 transition-all duration-300 text-yellow-600 text-center">
              Search
            </div>
          </div>
        </div>
        <div className="mt-10 md:order-3 order-2">
          <div className="content-container-post">
            {filterPost.length > 0 ? (
              <ul className="grid gap-3 md:grid-cols-3 lg:grid-cols-4 grid-cols-2">
                {filterPost.map((post, index) => (
                  <li className="apply_motion" key={post.id}>
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
            ) : (
              <h2 className="my-[200px] text-center text-red-500 font-semibold text-[2rem]">
                NOT FOUND RESULT !{" "}
              </h2>
            )}
          </div>
        </div>
      </WrapContainer>
    </>
  );
};
export default Posts;
