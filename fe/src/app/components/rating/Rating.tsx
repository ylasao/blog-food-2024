"use client";
import { Fragment, useState } from "react";
import React from "react";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import Reply from "../Reply/Reply";
import RatingStar from "./RatingStar";
import UserComment from "./UserComment";
interface Comment {
  id: number;
  name: string;
  content: string;
  date: string;
  reply: Reply[];
}
interface Reply {
  id: number;
  name: string;
  content: string;
}
const Rating = () => {
  const [rating, setRating] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [review, setReview] = useState("");
  const [showErr, setShowErr] = useState("");
  const [userComment, setUserComment] = useState<Comment[]>([]);
  console.log(userComment);
  const handleRating = (rating: number) => {
    setRating(rating);
    setShowPopup(true);
  };
  const handleReviewSubmit = () => {
    // alert(`Your rating : ${rating} Star .your review ${review}`);
    if (review.length > 0) {
      const currentDay = new Date();
      const getDay = currentDay.getDate();
      const getMonth = currentDay.getMonth() + 1;
      const getYear = currentDay.getFullYear();
      const date = `${getDay}/${getMonth}/${getYear}`;
      if (review.length > 0) {
        userComment.push({
          id: Math.floor(Math.random() * 99999 + 1),
          name: "user",
          content: review,
          date: date,
          reply: [],
        });
      }
      setUserComment(userComment);
      setShowPopup(false);
      setReview("");
      setShowErr("");
    } else {
      setShowErr("Please enter a value for review!");
    }
  };
  const handleSkipReviewSubmit = () => {
    setShowPopup(false);
    setReview("");
    setShowErr("");
  };
  const handleSubmit = (message: string, userId: number) => {
    const filter = userComment.find((user) =>
      user.id === userId ? user.reply : null
    );
    filter?.reply.push({
      id: Math.floor(Math.random() * 99999 + 1),
      name: "Author",
      content: message,
    });
  };
  return (
    <>
      <div className="flex my-10 flex-col items-center">
        <RatingStar rating={rating} handleRating={handleRating} />
        {showPopup && (
          <div className="review p-4 bg-white lg:w-[600px]  ">
            <h2 className="text-center my-4 text-slate-600 font-be-vietnam-pro text-[2rem]">
              Thank you for sharing your rating!
            </h2>
            <p className="text-center text-slate-500 text-sm">
              Your rating : {rating}
            </p>
            <h2 className="text-slate-500 font-semibold mt-2 text-lg">
              Đánh giá
            </h2>
            <textarea
              className="focus:outline-none rounded-lg mt-3 focus:ring border p-3 border-slate-300 w-full text-slate-500 text-lg"
              name=""
              id=""
              placeholder="Enter your review"
              rows={5}
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
            <span className="text-red-600 my-2">{showErr}</span>
            <br />
            <button
              onClick={handleReviewSubmit}
              className="text-[15px] py-2 mr-4 hover:text-yellow-600 hover:border-yellow-600 border duration-300 transition-all hover:bg-yellow-500/50  px-4 bg-yellow-600 text-white rounded-lg"
            >
              Send Review
            </button>
            <button
              onClick={handleSkipReviewSubmit}
              className="text-[15px] text-right py-2 px-4 border hover:text-white hover:bg-yellow-600  text-yellow-600 duration-300 transition-all border-yellow-600 bg-yellow-500/50 rounded-lg"
            >
              Skip Review
            </button>
          </div>
        )}
        <div className="review p-4 my-7">
          <h2
            onClick={() => setShowComment(!showComment)}
            className="text-slate-800 font-semibold cursor-pointer hover:underline text-[1.6rem] text-center"
          >
            See Comment
          </h2>
          <div className="flex justify-center mb-8 items-center">
            <FaRegComment className="flex justify-center items-center mr-3  text-slate-800 text-[2rem]" />
            <span className=" text-slate-800 text-[2rem]">10</span>
          </div>
        </div>
      </div>
      {userComment.length > 0 ? (
        showComment &&
        userComment.map((user, index) => (
          <UserComment
            id={user.id}
            handleSubmit={handleSubmit}
            keys={index}
            name={user.name}
            content={user.content}
            date={user.date}
            reply={user.reply}
          />
        ))
      ) : (
        <p className="text-center text-red-600 font-semibold">
          Current no comment & question ?
        </p>
      )}
    </>
  );
};

export default Rating;
