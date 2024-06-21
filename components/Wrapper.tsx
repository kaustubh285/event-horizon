import React from "react";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-secondary flex-1 h-full w-full p-4 rounded-t-xl ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
