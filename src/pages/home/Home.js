import React from "react";
import About from "./components/About";
import { MainContainer } from "../../shared/layout/MainContainer";
import { LandingImage } from "./components/LandingImage";
import Activities from "./components/Activities";
import Partners from "./components/Partners";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box className="bg-[#FFFDF5]">
      <LandingImage />
      <MainContainer>
        <About />
        <Activities />
        <Partners />
      </MainContainer>
    </Box>
  );
}
