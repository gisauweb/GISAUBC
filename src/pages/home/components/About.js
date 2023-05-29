import React from "react";
import { Box } from "@mui/material";
import about_image from "assets/home-page/about/about.png";
import about_mobile from "assets/home-page/about/about_mobile.png";
import sunshine_image from "assets/home-page/about/sunshine.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../shared/components/button/Button";
import { useMediaQuery } from "react-responsive";

const typographyStyle =
  "text-base xl:text-xl font-montserrat my-5 w-full lg:pr-6";

const About = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: `(max-width: 1039px) ` });
  const handleClickButton = () => {
    navigate("about");
  };

  return (
    <Box className="flex flex-col w-full text-center lg:text-left justify-center items-center lg:items-start">
      <Box className="w-full lg:w-1/2 flex justify-start pb-3 lg:pb-1.5">
        <span className="text-2xl sm:text-3xl xl:text-4xl font-semibold font-oswald text-primary pt-4 lg:pt-6">
          WHO WE ARE
        </span>
        <img
          src={sunshine_image}
          alt="Sunshine"
          className="h-6 sm:h-10 xl:h-full relative right-2 top-1 sm:right-3 sm:top-0 lg:top-2 xl:top-0"
        />
      </Box>
      <a
        href="/about"
        className="sm:pb-1 lg:w-1/3 2xl:w-fit lg:absolute lg:right-1/10"
      >
        <img
          src={isMobile ? about_mobile : about_image}
          alt="GISAU Executives"
          className="w-3/4 lg:w-full mx-auto mt-6 rounded-3xl"
        />
      </a>
      <Box className="w-3/4 sm:w-1/2 h-full">
        <p className={typographyStyle}>
          <i className="pr-0.5">Halo!</i> We are a non-profit cultural
          organization centered in promoting Indonesian hospitality around the
          UBC Vancouver campus.
        </p>
        <p className={typographyStyle}>
          GISAU aims to foster an inclusive, close-knitted, and connected
          community that exemplifies the signature Indonesian warmth and
          welcomes the diverse UBC society of Indonesian and non-Indonesian
          students alike.
        </p>
      </Box>
      <Button text="Learn More" handleClickButton={handleClickButton} />
    </Box>
  );
};

export default About;
