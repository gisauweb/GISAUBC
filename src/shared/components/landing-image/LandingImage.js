import React from "react";

export const LandingImage = ({ bgImage, text, isHomePage, children }) => {
  const backgroundStyles = {
    filter: "brightness(0.4)",
    backgroundSize: "cover",
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className={`h-screen items-center overflow-hidden`}>
      <div className={`absolute w-full h-full`} style={backgroundStyles} />
      <div className="relative flex justify-center items-center h-full">
        <div className="w-full mt-1/10">
          {isHomePage ? children :
            <h1 className="text-white my-4 md:my-8 mx-2 font-montserrat text-center font-semibold text-3xl sm:text-5xl lg:text-7xl uppercase tracking-wide">
              {text}
            </h1>}
        </div>
      </div>
    </div>
  );
};
