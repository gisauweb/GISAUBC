import React from "react";
import { MainContainer } from "../../shared/layout/MainContainer";
import { Box, Divider } from "@mui/material";
import { Footer } from "../../shared/components/footer/Footer";
import { SponsorRegistration, SponsorTitle, SponsorList } from "./components/index";
import { ScrollButtonContainer } from "shared/components/ScrollButton";

export const Partners = () => {
    return (
        <Box className="bg-[#FFFDF5]">
            <div className="flex justify-center"/>
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
