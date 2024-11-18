import React from "react"; 
const SharePost = ({ image }: { image: string | undefined }) => {
  return (
    <div className="flex items-center justify-center motion-delay-[800ms]">
      <button className="px-[16px] py-[4px] border border-slate-500 rounded-2xl text-slate-600 hover:text-slate-900 duration-300 transition-all mx-2">
        Share
      </button>
      <button className="px-[16px] py-[4px] border border-slate-500 rounded-2xl text-slate-600 hover:text-slate-900 duration-300 transition-all mx-2">
        Review
      </button>
      <a
        href={`${image}`}
        download
        className="px-[16px] py-[4px] border border-slate-500 rounded-2xl text-slate-600 hover:text-slate-900 duration-300 transition-all mx-2"
      >
        Download Image
      </a>
    </div>
  );
};

export default SharePost;
