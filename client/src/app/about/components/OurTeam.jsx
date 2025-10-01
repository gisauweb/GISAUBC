import React from "react";
import { Box, Typography } from "@mui/material";
import GridContainer from "@/shared/components/grid/GridContainer";
import { DropdownMenu } from "@/shared/components/index";
import TeamButtons from "./TeamButtons";
import TeamGridContent from "./TeamGridContent";

export default function OurTeam({ data, states }) {
  const {
    selectedYear,
    selectedButton,
    selectedCard,
    setSelectedYear,
    setSelectedButton,
    setSelectedCard,
  } = states;

  return (
    <Box>
      <Box className="w-full pb-4 sm:pb-6 3xl:pb-10 pt-20">
        <Typography variant="h3" color="primary">
          Meet our team.
        </Typography>
      </Box>
      <Box>
        <Box className="flex flex-col">
          <TeamButtons
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
          />
          <DropdownMenu
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            source="About"
          />
        </Box>
        <GridContainer className="sm:mt-14">
          <TeamGridContent
            data={data}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        </GridContainer>
      </Box>
    </Box>
  );
}
