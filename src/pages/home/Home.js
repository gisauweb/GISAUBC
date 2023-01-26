import React from "react";
import About from "./components/About";
import { MainContainer } from "../../shared/layout/MainContainer";
import { LandingImage } from "./components/LandingImage";
import Activities from "./components/Activities";
import Partners from "./components/Partners";

export default function Home() {
  return (
    <>
      <LandingImage />
      <MainContainer>
        <About />
        <Activities />
        <Partners />
      </MainContainer>
    </>
  );
}
