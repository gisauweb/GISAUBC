import React from "react";

import "./LandingButton.css";

export const LandingButton = ({ className, text, handleClickButton }) => {
  return (
    <div className={className}>
      <div
        className={`landing-button px-8 py-3 font-oswald normal-case font-normal text-lg cursor-pointer`}
        onClick={handleClickButton}
      >
        {text}
      </div>
    </div>
  );
};
