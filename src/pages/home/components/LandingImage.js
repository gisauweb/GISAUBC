import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "../../../shared/components/button/Button";
import Gisau from "../../../assets/gisau-logo/gisau.png";
import LandingImg from "../../../assets/landing.jpg";

import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  bgImage: {
    backgroundImage: `url(${LandingImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(50%)",
  },
});

export const LandingImage = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const isMobileView = useMediaQuery({
    query: "(max-width: 639px)",
  });

  const handleClickButton = () => {
    window.open("https://forms.gle/qujebG19m2VJzvBB6", "_blank", "noreferrer");
  };

  const handleClickButtonAGM = () => {
    navigate("polling");
  };

  return (
    <div className={`h-screen justify-center items-center overflow-hidden`}>
      <div className={`h-screen absolute w-full ${classes.bgImage}`}></div>
      <div className="relative flex justify-center items-center h-full">
        <div className="w-full mt-1/10">
          <img
            src={Gisau}
            alt="Gisau Logo"
            className="w-[30%] md:w-1/4 lg:w-1/5 m-auto"
          />
          <h1 className="text-white my-4 md:my-8 mx-2 font-proxima-nova text-center font-semibold text-xl sm:text-2xl md:text-4xl lg:text-[2.5rem] lg:leading-12">
            Gado-Gado Indonesian Student Association {!isMobileView && <br />}{" "}
            of UBC
          </h1>
          <div className="flex gap-x-4 justify-center">
            <Button
              className="grid justify-center"
              text="Become a member!"
              landingButton={true}
              handleClickButton={handleClickButton}
            />
            <Button
              className="grid justify-center"
              text="Vote for AGM!"
              landingButton={false}
              handleClickButton={handleClickButtonAGM}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
