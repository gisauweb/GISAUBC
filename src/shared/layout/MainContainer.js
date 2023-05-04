import React from "react";

export const MainContainer = ({ className, children }) => {
  return <div className={`${className} w-4/5 mx-auto`}>{children}</div>;
};
