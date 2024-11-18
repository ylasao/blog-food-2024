import React from "react";

const NumberRating = ({
  ratings,
  views,
}: {
  ratings: number | undefined;
  views: number | undefined;
}) => {
  return (
    <div className="motion-preset-slide-right motion-duration-500 text-[14px] text-slate-400 flex items-center justify-center motion-delay-[600ms] ">
      <span className="cursor-pointer hover:text-yellow-600 font-semibold  author mr-4">
        Ranting :{ratings}
      </span>
      <span className="cursor-pointer hover:text-yellow-600 font-semibold dateCre underline">
        Views : {views}
      </span>
    </div>
  );
};

export default NumberRating;
