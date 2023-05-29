import React from "react";

export const LandingImage = ({ bgImage, children }) => {
  const background = bgImage();

  return (
    <div className={`h-screen items-center overflow-hidden`}>
      <div className={`absolute w-full h-full ${background.styles}`} />
      <div className="relative flex justify-center items-center h-full">
        <div className="w-full mt-1/10">{children}</div>
      </div>
    </div>
  );
};
