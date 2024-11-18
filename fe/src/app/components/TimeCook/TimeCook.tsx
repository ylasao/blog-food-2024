import React from "react";

const TimeCook = ({
  prepTime,
  cookTime,
  serving
}: {
  prepTime: string | undefined;
  cookTime: string | undefined;
  serving: number | undefined;
}) => {
  return (
    <div className="motion-preset-slide-right motion-duration-500 flex my-10 items-center justify-around motion-delay-[1100ms]">
      <div className="block">
        <p className="text-slate-800 text-xs ld:text-sm pb-2 uppercase">
          Prep time
        </p>
        <p className="text-slate-500 text-center">{prepTime}</p>
      </div>
      <div className="block">
        <p className="text-slate-800 text-xs ld:text-sm pb-2 uppercase">
          cook time
        </p>
        <p className="text-slate-500 text-center">{cookTime}</p>
      </div>
      <div className="block">
        <p className="text-slate-800 text-xs ld:text-sm pb-2 uppercase">
          serves
        </p>
        <p className="text-slate-500 text-center">{serving}</p>
      </div>
    </div>
  );
};

export default TimeCook;
