import React from "react";
import { LandingImage } from "shared/components/landing-image/LandingImage";

export const EventLandingImage = () => {
  return (
    <div>
      <LandingImage>
        <h1 className="text-white my-4 md:my-8 mx-2 font-proxima-nova text-center font-semibold text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wide">
          Our Events
        </h1>
      </LandingImage>
    </div>
  );
};
