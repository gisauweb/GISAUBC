import React from "react";
import { Box } from "@mui/material";
import { EventLandingImage } from "./components/EventLandingImage";
import { MainContainer } from "../../shared/layout/MainContainer";
import { Footer } from "../../shared/components/footer/Footer";
import { PageTitle } from "shared/components/PageTitle";
import { PastEvents } from "./components/PastEvents";

export const Events = () => {
  return (
    <Box className="bg-[#FFFDF5]">
      <EventLandingImage />
      <MainContainer>
        <PageTitle text={"Connect with fellow Indonesians at our socials and large-scale events."} />
        <PastEvents />
      </MainContainer>
      <Footer />
    </Box>
  );
};
