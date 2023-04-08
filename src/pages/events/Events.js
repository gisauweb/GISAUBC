import React from "react";
import { Box } from "@mui/material";
import { EventLandingImage } from "./landing-image/EventLandingImage";
import { MainContainer } from "../../shared/layout/MainContainer";
import { Footer } from "../../shared/components/footer/Footer";

export const Events = () => {
  return (
    <div>
      <Box className="bg-[#FFFDF5]">
        <EventLandingImage />
        <MainContainer></MainContainer>
        <Footer />
      </Box>
    </div>
  );
};
