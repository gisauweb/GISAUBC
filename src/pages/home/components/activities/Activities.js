import { Box, Typography } from "@mui/material";
import React from "react";
import smiley from "assets/activities/smiley.svg";
import { activities } from "./constants";
const Activities = () => {
  return (
    <Box className="py-14">
      <Box className="w-full flex items-center">
        <span className="text-3xl font-bold font-oswald text-primary">
          WHAT WE DO
        </span>
        <img
          src={smiley}
          alt="Smiley"
          className="h-18 ml-2"
        />
      </Box>
      <Box className="w-full flex justify-between py-8">
        {activities.map((activity, index) =>
          <Box key={index} className="w-1/3 flex flex-col text-center ">
            <Box className="w-full flex justify-center">
              <img alt="Activity" src={activity.image} className="w-3/4 h-full" />
            </Box>
            <Box className="px-14">
              <Box className="font-proxima-nova text-2xl" sx={{ my: 4, fontWeight: "bold" }}>{activity.title}</Box>
              <Box className="font-proxima-nova text-xl">{activity.description}</Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default Activities;