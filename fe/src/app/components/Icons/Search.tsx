import React from "react";
import { CiSearch } from "react-icons/ci";
import clsx from "clsx";
const Search = ({ className }: { className: string }) => {
  return (
    <>
      <CiSearch className={clsx("", className)} />
    </>
  );
};
export default Search;
