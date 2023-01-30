import React from "react";

import "./LandingButton.css";

export const LandingButton = ({ className }) => {
  return (
    <div className={className}>
      <div
        className={`button px-8 py-3 font-oswald normal-case font-normal text-lg`}
      >
        Become a member!
      </div>
    </div>
  );
};
