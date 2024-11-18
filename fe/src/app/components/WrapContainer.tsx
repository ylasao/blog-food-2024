import React, { ReactNode } from "react";
import clsx from "clsx";
const WrapContainer = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={clsx("max-w-screen-xl mx-auto w-ful h-full", className)}>
      {children}
    </div>
  );
};

export default WrapContainer;
