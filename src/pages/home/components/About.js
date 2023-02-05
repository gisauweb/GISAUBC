import React from "react";
import { Box } from "@mui/material";
import about_image from "assets/about_2.png";
import sunshine_image from "assets/sunshine.svg";
import { useNavigate } from "react-router-dom";
import HomeButton from "shared/components/HomeButton";

const typographyStyle = "text-[18px] md:text-[24px] leading-tight font-proxima-nova my-5 w-full sm:pr-12";

const About = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("about");
  };

  return (
    <Box className="flex flex-col w-full text-center sm:text-left justify-center items-center sm:items-start pt-20">
      <Box className="w-1/2 flex pb-1.5">
        <span className="text-xl sm:text-3xl md:text-4xl font-bold font-oswald text-primary pt-4">
          WHO WE ARE
        </span>
        <img src={sunshine_image} alt="Sunshine" className="h-10 sm:h-full relative right-4 bottom-4"></img>
      </Box>
      <a href="/about" className="sm:w-1/3 sm:absolute sm:right-1/10"><img
        src={about_image}
        alt="GISAU Executives"
        className="w-full"
      /></a>
      <Box className="w-1/2 h-full">
        <p className={typographyStyle}>
          Hello! We are a non-profit cultural organization centered in promoting
          Indonesian hospitality around the UBC Vancouver campus.
        </p>
        <p className={typographyStyle}>
          GISAU aims to foster an inclusive, close-knitted, and connected
          community that exemplifies the signature Indonesian warmth and
          welcomes the diverse UBC society of Indonesian and non-Indonesian
          students alike.
        </p>
        <HomeButton handleClickButton={handleClickButton} />
      </Box>
    </Box>
  );
};

export default About;
