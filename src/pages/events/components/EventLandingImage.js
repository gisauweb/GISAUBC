import React from "react";
import { LandingImage } from "shared/components/landing-image/LandingImage";
import event_landing_img from "../../../assets/landing/event.jpg";

export const EventLandingImage = () => {
  return (
    <LandingImage bgImage={event_landing_img}>
      <h1 className="text-white my-4 md:my-8 mx-2 font-montserrat text-center font-semibold text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wide">
        Our Events
      </h1>
    </LandingImage>
  );
};
