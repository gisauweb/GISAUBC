import React from "react";
import { Box } from "@mui/material";
import about_image from "assets/about/about.png";
import about_mobile from "assets/about/about_mobile.png";
import sunshine_image from "assets/sunshine.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "shared/components/Button/Button";
import { useMediaQuery } from "react-responsive";

const typographyStyle = "text-base sm:text-base xl:text-xl font-proxima-nova my-5 w-full sm:pr-6";

const About = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: `(max-width: 639px) ` });
  const handleClickButton = () => {
    navigate("about");
  };

  return (
    <Box className="flex flex-col w-full text-center sm:text-left justify-center items-center sm:items-start pt-10 sm:pt-20">
      <Box className="w-full sm:w-1/2 flex justify-center sm:justify-start pb-6 sm:pb-1.5 pl-6 sm:pl-0">
        <span className="text-2xl sm:text-3xl xl:text-4xl font-semibold font-oswald text-primary pt-4 sm:pt-6">
          WHO WE ARE
        </span>
        <img
          src={sunshine_image}
          alt="Sunshine"
          className="h-6 sm:h-10 xl:h-full relative right-2 top-1 sm:top-2 xl:top-0 "
        />
      </Box>
      <a href="/about" className="sm:w-1/3 2xl:w-fit sm:absolute sm:right-1/10">
        <img
          src={isMobile ? about_mobile : about_image}
          alt="GISAU Executives"
          className="w-3/4 sm:w-full mx-auto sm:mt-6"
        />
      </a>
      <Box className="w-3/4 sm:w-1/2 h-full">
        <p className={typographyStyle}>
          <i className="pr-0.5">Halo!</i> We are a non-profit cultural organization centered in promoting
          Indonesian hospitality around the UBC Vancouver campus.
        </p>
        <p className={typographyStyle}>
          GISAU aims to foster an inclusive, close-knitted, and connected
          community that exemplifies the signature Indonesian warmth and
          welcomes the diverse UBC society of Indonesian and non-Indonesian
          students alike.
        </p>
      </Box>
      <Button
          // className="mt-1"
          text="Learn More"
          handleClickButton={handleClickButton}
        />
    </Box>
  );
};

export default About;
