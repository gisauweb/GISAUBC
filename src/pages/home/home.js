import React from "react";
import About from "../../components/about/About";
import { LandingImage } from "./components/LandingImage";

export const Home = () => {
  return (
    <MainContainer>
      <LandingImage />
      <About />
    </MainContainer>
  );
};
