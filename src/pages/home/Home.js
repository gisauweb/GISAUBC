import React from "react";
import About from "../../components/about/About";
import { MainContainer } from "../../shared/layout/MainContainer";
import { LandingImage } from "./components/LandingImage";

export default function Home() {
  return (
    <>
      <LandingImage />
      <MainContainer>
        <About />
      </MainContainer>
    </>
  );
};