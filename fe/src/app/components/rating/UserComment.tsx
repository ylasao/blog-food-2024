import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";
import Reply from "../Reply/Reply";
import { useState } from "react";
import ShowReply from "./ShowReply";
interface UserReply {
  id: number;
  name: string;
  content: string;
}
const UserComment = ({
  handleSubmit,
  id,
  name,
  date,
  keys,
  content,
  reply,
}: {
  name: string;
  id: number;
  date: string;
  content: string;
  keys: number;
  reply: UserReply[];
  handleSubmit: (message: string, userId: number) => void;
}) => {
  const [isReply, setIsReply] = useState(false);
  const [showAllReply, setShowAllReply] = useState(false);
  const [selectUseReply, setSelectReply] = useState(0);
  const handleShowReply = (id: number) => {
    setSelectReply(id);
    setIsReply(!isReply);
  };
  const handleCancel = () => {
    setIsReply(false);
  };
  const handleShowAll = () => {
    setShowAllReply(!showAllReply);
  };
  const submitReply = (message: string, userId: number) => {
    handleSubmit(message, userId);
  };

  return (
    <div key={keys} className="comment p-4 flex my-3 items-start">
      <div className="user mr-5">
        <FaRegCircleUser className="text-[1.8rem] text-slate-500 " />
      </div>
      <div className="block">
        <div className="useName_dateComment mb-2 flex items-center text-slate-500">
          <span className="font-semibold mr-2">{name}</span>
          <span className="text-sm text-slate-400">{date}</span>
        </div>
        <div className="useContent text-sm my-3 text-slate-500">
          {/* {post?.comments.} */}
          {content}
        </div>
        <div className="userEdit">
          <ul className="flex text-sm text-slate-400  items-center ">
            <li className="mx-2">
              <Link className="hover:underline " href="#">
                Like
              </Link>
            </li>
            <li className="mx-2">
              <button onClick={handleShowAll} className="hover:underline ">
                Show reply
              </button>
            </li>
            <li className="mx-2">
              <button
                onClick={() => handleShowReply(id)}
                className="hover:underline "
              >
                Reply
              </button>
            </li>
          </ul>
          {reply.map((item, index) => {
            return (
              showAllReply && (
                <ShowReply
                  className=""
                  index={index}
                  name={item.name}
                  id={item.id}
                  content={item.content}
                />
              )
            );
          })}
          {isReply && (
            <Reply
              id={selectUseReply}
              submitReply={submitReply}
              handleCancel={handleCancel}
              name="Author"
              content=""
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserComment;
