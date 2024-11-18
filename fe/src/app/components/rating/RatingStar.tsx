import React from "react";

const RatingStar = ({
  rating,
  handleRating,
}: {
  rating: number;
  handleRating: (rating: number) => void;
}) => {
  const handleClick = (star: number) => {
    handleRating(star);
  };
  return (
    <div className="flex justify-center items-center">
      <h2 className="text-slate-500 font-semibold mr-3">Your rating</h2>
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-8 h-8 ${
              rating >= star ? "text-yellow-400" : "text-gray-300"
            } hover:text-yellow-400 duration-300 transition-all cursor-pointer`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleClick(star)}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default RatingStar;
