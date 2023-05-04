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
        <MainContainer className={`mt-20`}>
          <span
            className={`font-proxima-nova text-primary text-3xl sm:text-4xl xl:text-5xl font-bold`}
          >
            Connect with fellow Indonesians at our socials and large-scale
            events.
          </span>
          <EventLayout
            id="events"
            className={`mt-20 sm:mt-24 xl:mt-32`}
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
