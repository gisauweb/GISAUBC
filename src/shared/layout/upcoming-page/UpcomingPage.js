import { Box } from "@mui/material";
import { EventLandingImage } from "pages/events/components/EventLandingImage";
import React from "react";
import { MainContainer } from "shared/layout/MainContainer";
import { StayTuned } from "shared/layout/upcoming-page/StayTuned";

export const UpcomingPage = () => {
  return (
    <Box className="bg-[#FFFDF5]">
      <div className="flex justify-center" />
      <MainContainer>
        <StayTuned />
      </MainContainer>
    </Box>
  );
};
