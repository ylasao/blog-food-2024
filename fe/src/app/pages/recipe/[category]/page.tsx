import React from "react";
import Posts from "./Posts";
const Page = async ({ params }: { params: { category: string } }) => {
  const { category } = await params;
  return (
    <section className="px-[16px] my-10">
      <Posts category={category} />
    </section>
  );
};
export default Page;
