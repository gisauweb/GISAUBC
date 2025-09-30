import React from "react";
import { Box } from "@mui/material";
import MainContainer from "@/shared/layout/MainContainer";
import { Footer, ScrollButton } from "@/shared/components/index";
import About from "./components/About";
import HomeLandingImg from "./components/HomeLandingImage";
import Activities from "./components/activities/Activities";
import Events from "./components/Events";
import Partners from "./components/Partners";

export default function HomePage() {
  return (
    <Box className="relative">
      <HomeLandingImg />
      <MainContainer>
        <About />
        <Activities />
        <Events />
        <Partners />
        <ScrollButton threshold={1 / 2} />
      </MainContainer>
      <Footer showPlane />
    </Box>
  );
}
