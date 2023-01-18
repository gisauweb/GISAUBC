import React from "react";
import { Box, Button } from "@mui/material";
import about_image from "assets/about_2.png";
import sunshine_image from "assets/sunshine.svg";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const typographyStyle = "text-[19px] font-proxima-nova my-6 w-full pr-12";

const useStyles = makeStyles({
  button: {
    borderRadius: "24px",
    textTransform: "none",
    width: "22%",
    background: "linear-gradient(to left, #7D0202, #7D0202)",
    color: "white",
    height: "2.8rem",
    paddingTop: "0.3rem",
    transition: "background 300ms ease-out",
    "&:hover": {
      background: "linear-gradient(to left, #7D0202, #B25F4C)",
    },
  }
});

const About = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleClickButton = () => {
    navigate("about");
  };

  return (
    <Box className={`flex justify-between items-center py-14`}>
      <Box className="w-1/2 h-full">
        <Box className={`w-full flex pb-3`}>
          <span className="text-3xl font-bold font-oswald text-primary pt-8">
            WHO WE ARE
          </span>
          <img src={sunshine_image} alt="Sunshine" className="h-18 relative -z-10 right-4"></img>
        </Box>
        <p className={typographyStyle}>
          Hello! We are a non-profit cultural organization centered in promoting
          Indonesian hospitality around the UBC Vancouver campus.
        </p>
        <p className={typographyStyle}>
          GISAU aims to foster an inclusive, close-knitted, and connected
          community that exemplifies the signature Indonesian warmth and
          welcomes the diverse UBC society of Indonesian and non-Indonesian
          students alike.
        </p>
        <Button
          variant="contained"
          size="large"
          className={classes.button}
          onClick={handleClickButton}
        >
          <span className="font-oswald text-lg">Learn More</span>
        </Button>
      </Box>
      <Box className="w-1/2 flex justify-center">
        <img
          src={about_image}
          alt="GISAU Executives"
          className="w-5/6"
        />
      </Box>
    </Box>
  );
};

export default About;
