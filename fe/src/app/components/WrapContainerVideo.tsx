import React from "react";
import clsx from "clsx";
const WrapContainerVideo = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={clsx(`px-5 w-full h-full`, className)}>{children}</div>
  );
};

export default WrapContainerVideo;
