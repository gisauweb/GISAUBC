import React from "react";
import { Box } from "@mui/material";
import { activities, smiley } from "./constants";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { ActivitiesSlider } from "./Slider";

const Activities = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: `(max-width: 1023px) ` });

  const handleClickActivity = () => {
    navigate("activities");
  };

  return (
    <Box className="pt-24">
      <Box className="w-full flex items-center pl-6 lg:pl-0 lg:pb-3 mb-5 lg:mb-0">
        <span className="text-xl sm:text-2xl xl:text-4xl font-semibold font-oswald text-primary">
          WHAT WE DO
        </span>
        <img
          src={smiley}
          alt="Smiley"
          className="h-6 sm:h-10 xl:h-full ml-1"
        />
      </Box>
      <Box className="w-full flex lg:py-8">
        {isMobile ? <ActivitiesSlider /> :
          <>{activities.map((activity, index) =>
            <Box key={index} className="w-1/3 flex flex-col" sx={{ alignItems: activity.alignment}}>
              <Box className="w-5/6">
                <img alt="Activity" id={activity.id} src={activity.image} className="h-full w-full hover:cursor-pointer" onClick={handleClickActivity} />
              </Box>
              <Box className="w-5/6 text-center px-3">
                <Box className="font-proxima-nova text-2xl" sx={{ my: 3, fontWeight: "bold" }}>{activity.title}</Box>
                <Box className="font-proxima-nova text-lg">{activity.description}</Box>
              </Box>
            </Box>
          )}</>
        }
      </Box>
    </Box>
  );
};
export default Activities;