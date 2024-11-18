import React from "react";
const Ingredient = ({
  index,
  quantity,
  ingredient,
}: {
  index: number;
  quantity: string;
  ingredient: string;
}) => {
  return (
    <li key={index} className="flex items-center pb-4">
      <span className="font-semibold pr-2  text-[1rem] text-slate-800">
        {quantity}
      </span>
      <article className="text-lg text-slate-500">{ingredient}</article>
    </li>
  );
};

export default Ingredient;
