import React from "react";
import { makeStyles } from "@mui/styles";
import { LandingImage } from "shared/components/landing-image/LandingImage";
import LandingImg from "../../../assets/landing/event.jpg";

const bgImage = makeStyles({
  styles: {
    backgroundImage: `url(${LandingImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(50%)",
  },
});

export const EventLandingImage = () => {
  return (
    <div>
      <LandingImage bgImage={bgImage}>
        <h1 className="text-white my-4 md:my-8 mx-2 font-proxima-nova text-center font-semibold text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wide">
          Our Events
        </h1>
      </LandingImage>
    </div>
  );
};
