import React from "react";
import { makeStyles } from "@mui/styles";
import { LandingButton } from "../../../shared/components/Button/LandingButton";
import Gisau from "../../../assets/gisau-logo/gisau.png";
import LandingImg from "../../../assets/landing.jpg";

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
  const classes = useStyles();

  return (
    <div className={`h-screen justify-center items-center`}>
      <div className={`h-screen absolute w-full ${classes.bgImage}`}></div>
      <div className="relative flex justify-center items-center h-full">
        <div className="w-full mt-1/10">
          <img src={Gisau} alt="Gisau Logo" className="w-1/5 m-auto"></img>
          <h1 className="text-white my-8 font-proxima-nova text-center text-[2.5rem] font-semibold leading-12">
            Gado-Gado Indonesian Student Association <br />
            of UBC
          </h1>
          <LandingButton className="grid justify-center" />
        </div>
      </div>
    </div>
  );
};
