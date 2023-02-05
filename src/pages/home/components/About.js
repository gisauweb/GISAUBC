import React from "react";
import { Box } from "@mui/material";
import about_image from "assets/about/about.png";
import about_mobile from "assets/about/about_mobile.svg";
import sunshine_image from "assets/sunshine.svg";
import { useNavigate } from "react-router-dom";
import HomeButton from "shared/components/HomeButton";
import { useMediaQuery } from "react-responsive";

const typographyStyle = "text-[10px] lg:text-[18px] xl:text-[24px] leading-tight font-proxima-nova my-5 w-full lg:pr-12";

const About = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: `(max-width: 400) ` });
  console.log("isMobile: ", isMobile)
  const handleClickButton = () => {
    navigate("about");
  };

  return (
    <Box className="flex flex-col w-full text-center lg:text-left justify-center items-center lg:items-start pt-20">
      <Box className="w-1/2 flex pb-1.5">
        <span className="text-xl lg:text-3xl xl:text-4xl font-bold font-oswald text-primary pt-4">
          WHO WE ARE
        </span>
        <img src={sunshine_image} alt="Sunshine" className="h-10 lg:h-full relative right-4 bottom-4"></img>
      </Box>
      <a href="/about" className="lg:w-1/3 lg:absolute lg:right-1/10">
        <img
          src={isMobile ? about_mobile : about_image}
          alt="GISAU Executives"
          className="w-full"
        />
      </a>
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
