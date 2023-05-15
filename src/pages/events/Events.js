import React from "react";
import { Box } from "@mui/material";
import { EventLandingImage } from "./components/EventLandingImage";
import { MainContainer } from "../../shared/layout/MainContainer";
import { Footer } from "../../shared/components/footer/Footer";
import { Typography } from "shared/components/Typography";
import EventContent from "./components/EventContent";

export const Events = () => {
  return (
    <Box className="bg-[#FFFDF5]">
      <EventLandingImage />
      <MainContainer>
        <Typography variant="h1" text={"Connect with fellow Indonesians at our socials and large-scale events."} />
        <EventContent upcoming={true}/>
        <EventContent upcoming={false}/>
      </MainContainer>
      <Footer />
    </Box>
  );
};
