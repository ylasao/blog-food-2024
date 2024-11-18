import React, { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";
import { useRef } from "react";
const Reply = ({
  name,
  content,
  id,
  handleCancel,
  submitReply,
}: {
  name: string;
  id: number;
  content: string;
  handleCancel: () => void;
  submitReply: (message: string, id: number) => void;
}) => {
  const [message, setMessage] = useState("");
  const handleClick = () => {
    handleCancel();
    setMessage("");
  };
  const element = useRef<HTMLTextAreaElement>(null);
  const handleSubmitReply = (message: string) => {
    if (message.length < 1) {
      alert("Before submit , Please enter content comment ! Thank you . ");
      return;
    }
    submitReply(message, id);
    setMessage("");
    handleCancel();
    if (element.current) {
      element.current.focus();
    }
  };

  return (
    <>
      <div className="comment flex my-3 items-start">
        <div className="user mr-5">
          <FaRegCircleUser className="text-[1.8rem] text-slate-500 " />
        </div>
        <div className="block">
          <div className="useName_dateComment mb-2 flex items-center text-slate-500">
            <span className="font-semibold mr-2">{name}</span>
          </div>
          <div className="useContent text-sm my-3 text-slate-500">
            {/* {post?.comments.} */}
            <textarea
              ref={element}
              onChange={(e) => setMessage(e.target.value)}
              name=""
              id=""
              rows={5}
              placeholder="Ex: thank you for comment !"
              className="outline-none p-3 border-slate-400 border w-[250px] rounded-sm md:w-[600px]"
            />
          </div>
          <div className="userEdit">
            <ul className="flex text-sm text-slate-400  items-center ">
              <li className="mx-2">
                <button
                  className="hover:underline"
                  onClick={() => handleSubmitReply(message)}
                >
                  Send message
                </button>
              </li>
              <li className="mx-2">
                <button
                  className="hover:underline"
                  onClick={() => handleClick()}
                >
                  Cancel
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reply;
