import React from "react";
import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router-dom";

import HomeLandingImg from "../../../assets/landing/home.jpg";
import EventLandingImg from "../../../assets/landing/event.jpg";

const useStyles = makeStyles({
  bgImage: {
    backgroundImage: `url(${HomeLandingImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(50%)",
  },
  bgImage2: {
    backgroundImage: `url(${EventLandingImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(50%)",
  },
});

export const LandingImage = ({ children }) => {
  const location = useLocation();
  const classes = useStyles();

  return (
    <div className={`h-screen justify-center items-center overflow-hidden`}>
      <div
        className={`h-screen absolute w-full ${
          location.pathname === "/" ? classes.bgImage : classes.bgImage2
        }`}
      ></div>
      <div className="relative flex justify-center items-center h-full">
        <div className="w-full mt-1/10">{children}</div>
      </div>
    </div>
  );
};
