import { Box } from "@mui/material";
import eventLandingImage from "assets/landing-image/event.webp";
import { Footer, LandingImage, ScrollButton } from "@/shared/components/index";
import PageHeading from "@/shared/components/PageHeading";
import MainContainer from "@/shared/layout/MainContainer";
import EventContent from "./components/EventContent";

export default function Events() {
  return (
    <Box>
      <LandingImage bgImage={eventLandingImage} text="Our Events" />
      <MainContainer>
        <PageHeading>
          Connect with fellow Indonesians at our socials and large-scale events.
        </PageHeading>
        <EventContent upcoming />
        <EventContent upcoming={false} />
        <ScrollButton threshold={1 / 2} />
      </MainContainer>
      <Footer />
    </Box>
  );
}
