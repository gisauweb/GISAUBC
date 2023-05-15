import React from "react";
import { Box } from "@mui/material";
import { EventLandingImage } from "./components/EventLandingImage";
import { MainContainer } from "../../shared/layout/MainContainer";
import { Footer } from "../../shared/components/footer/Footer";
import { Typography } from "shared/components/Typography";
import { PastEvents } from "./components/PastEvents";
import { UpcomingEvent } from "./components/UpcomingEvent";

export const Events = () => {
  return (
    <Box className="bg-[#FFFDF5]">
      <EventLandingImage />
      <MainContainer>
        <Typography variant="h1" text={"Connect with fellow Indonesians at our socials and large-scale events."} />
        <UpcomingEvent />
        <PastEvents />
      </MainContainer>
      <Footer />
    </Box>
  );
};
