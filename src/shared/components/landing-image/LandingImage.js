import React from "react";

export const LandingImage = ({ className, bgImage, children }) => {
  const background = bgImage();

  return (
    <div
      className={`${className} h-screen justify-center items-center overflow-hidden`}
    >
      <div className={`h-screen absolute w-full ${background.styles}`}></div>
      <div className="relative flex justify-center items-center h-full">
        <div className="w-full mt-1/10">{children}</div>
      </div>
    </div>
  );
};
