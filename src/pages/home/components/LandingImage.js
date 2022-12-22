import React from "react";
import { makeStyles } from "@mui/styles";
import { CustomButton } from "../../../shared/components/CustomButton";
import Gisau from "../../../assets/gisau-logo/gisau.png";
import LandingImg from "../../../assets/landing-image/1.JPG";

const useStyles = makeStyles({
  bgImage: {
    backgroundImage: `url(${LandingImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // filter: "brightness(50%)",
  },
});

export const LandingImage = () => {
  const classes = useStyles();

  return (
    <div
      className={`landing-image h-screen ${classes.bgImage} flex justify-center items-center`}
    >
      <div className="">
        <img src={Gisau} alt="Gisau Logo" className="w-3/10 m-auto"></img>
        <h1 className="text-white my-4 font-proxima-nova">
          Gado-Gado Indonesian Student Association <br />
          of UBC
        </h1>
        <CustomButton />
        <p className="text-white">Hello World</p>
      </div>
    </div>
  );
};
