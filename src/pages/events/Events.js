import React from "react";
import { Box } from "@mui/material";
import { EventLandingImage } from "./landing-image/EventLandingImage";
import { MainContainer } from "../../shared/layout/MainContainer";
import { Footer } from "../../shared/components/footer/Footer";
import { EventLayout } from "shared/layout/event-layout/EventLayout";
import { UPCOMINGEVENTS } from "pages/home/components/events/constants";

export const Events = () => {
  return (
    <div>
      <Box className="bg-[#FFFDF5]">
        <EventLandingImage />
        <MainContainer>
          <EventLayout
            id="events"
            className={`mt-10`}
            title={UPCOMINGEVENTS.title}
            events={UPCOMINGEVENTS.events}
            icon={UPCOMINGEVENTS.icon}
            button1={UPCOMINGEVENTS.button1}
            isMobileView={false}
            isEventsPage={true}
          />
        </MainContainer>
        <Footer />
      </Box>
    </div>
  );
};
