import React from "react";
import { MainContainer } from "../../shared/layout/MainContainer";
import { Box } from "@mui/material";
import { Footer } from "../../shared/components/footer/Footer";
import SponsorDivider from "./components/SponsorDivider";
import SponsorRegistration from "./components/SponsorRegistration";
import SponsorTitle from "./components/SponsorTitle";
import SponsorList from "./components/SponsorList";
import { LandingImage } from "pages/home/components/LandingImage";

export const Partners = () => {
    return (
        <Box className="bg-[#FFFDF5]">
            {/* <LandingImage /> */}
            <MainContainer>
                <SponsorTitle />
                <SponsorDivider />
                <SponsorList />
                <SponsorDivider />
                <SponsorRegistration />
            </MainContainer>
            <Footer />
        </Box>
    );
};
