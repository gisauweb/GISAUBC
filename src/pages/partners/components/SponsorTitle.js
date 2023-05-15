import { Box } from "@mui/material";
import gisau_logo from "assets/gisau-logo/gisau.svg"
import React from "react";
import { Typography } from "shared/components/Typography";

const SponsorTitle = () => {


    return (
        <Box className="flex flex-col justify-center items-center pt-20 pb-3">
            <Typography variant="h1" text="2022/23 Partners" />
        </Box>
    )
}

export default SponsorTitle