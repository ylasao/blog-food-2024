import React from "react";

const Author = ({
  name,
  datePublic
}: {
  name: string | undefined;
  datePublic: string | undefined;
}) => {
  return (
    <div className="text-[14px] my-2 text-slate-400 flex items-center justify-center motion-preset-slide-right motion-duration-500 motion-delay-[500ms]">
      <span className="mx-1 author">by: {name}</span>
      <span className="mx-1 dateCre">{datePublic} </span>
    </div>
  );
};

export default Author;
