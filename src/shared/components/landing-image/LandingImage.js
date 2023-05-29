import React from "react";

export const LandingImage = ({ bgImage, children }) => {
  const backgroundStyles = {
    filter: "brightness(0.35)",
    backgroundSize: "cover",
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className={`h-screen items-center overflow-hidden`}>
      <div className={`absolute w-full h-full`} style={backgroundStyles} />
      <div className="relative flex justify-center items-center h-full">
        <div className="w-full mt-1/10">{children}</div>
      </div>
    </div>
  );
};
