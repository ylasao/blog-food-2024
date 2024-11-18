import Link from "next/link";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import clsx from "clsx";
const ShowReply = ({
  index,
  name,
  id,
  content,
  className,
}: {
  index: number;
  name: string;
  id: number;
  className: string;
  content: string;
}) => {
    
  return (
    <div
      key={index}
      className={clsx("comment p-2 flex mt-2 items-start", className)}
    >
      <div className="user mr-5">
        <FaRegCircleUser className="text-[1.8rem] text-slate-500 " />
      </div>
      <div className="block">
        <div className="useName_dateComment mb-2 flex items-center text-slate-500">
          <span className="font-semibold mr-2">{name}</span>
        </div>
        <div className="useContent text-sm my-3 text-slate-500">
          {/* {post?.comments.} */}
          {content}
          {/* Thank u with comment */}
        </div>
        <div className="userEdit">
          <ul className="flex text-sm text-slate-400  items-center ">
            <li className="mx-2">
              <Link className="hover:underline " href="#">
                Like
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShowReply;
