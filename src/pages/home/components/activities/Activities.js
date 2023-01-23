import React from "react";
import { Box } from "@mui/material";
import { activities, smiley } from "./constants";
import { useNavigate } from "react-router-dom";

const Activities = () => {
  const navigate = useNavigate();

  const handleClickActivity = () => {
    navigate("activities");
  };

  return (
    <Box className="py-14">
      <Box className="w-full flex items-center mb-3">
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
          <Box key={index} className="w-1/3">
            <Box className="w-5/6">
              <img alt="Activity" id={activity.id} src={activity.image} className="h-full hover:cursor-pointer" onClick={handleClickActivity}/>
            </Box>
            <Box className="w-3/4 text-center">
              <Box className="font-proxima-nova text-2xl h-16" sx={{ my: 3, fontWeight: "bold", paddingRight: 1.5}}>{activity.title}</Box>
              <Box className="font-proxima-nova text-lg pr-1">{activity.description}</Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default Activities;