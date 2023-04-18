import React from "react";
import { MainContainer } from "../../shared/layout/MainContainer";
import { Box } from "@mui/material";
import { Footer } from "../../shared/components/footer/Footer";
import { SponsorDivider, SponsorRegistration, SponsorTitle, SponsorList } from "./components/index";
import { ScrollButtonContainer } from "shared/components/ScrollButton";
// import { LandingImage } from "pages/home/components/LandingImage";

export const Partners = () => {
    return (
        <Box className="bg-[#FFFDF5]">
            <MainContainer>
                <SponsorTitle />
                <SponsorDivider />
                <SponsorList />
                <SponsorDivider />
                <SponsorRegistration />
                <ScrollButtonContainer threshold={1 / 4} />
            </MainContainer>
            <Footer showPlane={false} />
        </Box>
    );
};
