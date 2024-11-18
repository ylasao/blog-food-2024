import React from "react";
interface TextNamePostProps {
  name: string;
  limit: number;
  suffix?: string;
}
const TextNamePost = ({ name, limit, suffix = "..." }: TextNamePostProps) => {
  return (
    <p className="text-slate-600 hover:text-slate-700 duration-200 transition-all mt-3">
      {name.length > limit ? name.slice(0, limit) + suffix : name}
    </p>
  );
};

export default TextNamePost;
