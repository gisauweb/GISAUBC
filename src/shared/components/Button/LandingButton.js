import React from "react";

import "./LandingButton.css";

export const LandingButton = ({ className, text }) => {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div className={className}>
      <div
        className={`landing-button px-8 py-3 font-oswald normal-case font-normal text-lg cursor-pointer`}
        onClick={handleClick}
      >
        {text}
      </div>
    </div>
  );
};
