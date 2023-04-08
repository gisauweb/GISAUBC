import React from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "../../../shared/components/button/Button";
import { LandingImage } from "shared/components/landing-image/LandingImage";
import Gisau from "../../../assets/gisau-logo/gisau.png";

export const HomeLandingImage = () => {
  const isMobileView = useMediaQuery({
    query: "(max-width: 639px)",
  });

  const handleClickButton = () => {
    window.open("https://forms.gle/qujebG19m2VJzvBB6", "_blank", "noreferrer");
  };

  return (
    <div>
      <LandingImage>
        <img
          src={Gisau}
          alt="Gisau Logo"
          className="w-[30%] md:w-1/4 lg:w-1/5 m-auto"
        />
        <h1 className="text-white my-4 md:my-8 mx-2 font-proxima-nova text-center font-semibold text-xl sm:text-2xl md:text-4xl lg:text-[2.5rem] lg:leading-12">
          Gado-Gado Indonesian Student Association {!isMobileView && <br />} of
          UBC
        </h1>
        <div className="flex gap-x-4 justify-center">
          <Button
            className="grid justify-center"
            text="Become a member!"
            landingButton={true}
            handleClickButton={handleClickButton}
          />
        </div>
      </LandingImage>
    </div>
  );
};
