import React from "react";
import { MainContainer } from "../../shared/layout/MainContainer";
import { Box, Divider } from "@mui/material";
import { Footer } from "../../shared/components/footer/Footer";
import { SponsorRegistration, SponsorTitle, SponsorList } from "./components/index";
import { ScrollButtonContainer } from "shared/components/ScrollButton";
import { LandingImage } from "shared/components/landing-image/LandingImage";
import landing_img from "assets/landing/partners.jpeg"

export const Partners = () => {
    return (
        <Box className="bg-[#FFFDF5]">
            <LandingImage bgImage={landing_img} text={"Our Partners"} />
            <MainContainer>
                <SponsorTitle />
                <Divider className="py-[0.5px]" color="black"/>
                <SponsorList />
                <Divider className="py-[0.5px]" color="black"/>
                <SponsorRegistration />
                <ScrollButtonContainer threshold={1 / 4} />
            </MainContainer>
            <Footer showPlane={false} />
        </Box>
    );
};
