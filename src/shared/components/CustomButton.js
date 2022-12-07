import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  button: {
    borderRadius: "1.5rem",
    borderWidth: "2.5px",
    borderImageSlice: 1,
    borderColor: "#7d0202",
    color: "#ffffff",
    backgroundImage: "linear-gradient(225deg, #7D0202, #B25F4C)",
    borderImageSource: "linear-gradient(225deg, #7D0202, #B25F4C)",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#7d0202",
      backgroundImage: "linear-gradient(-45deg, #8E201A, #EBC19A)",
      borderWidth: "2.5px",
      borderColor: "#7d0202",
      color: "#ffffff",
    },
  },
  button2: {
    color: "#000",
    borderRadius: "1.5rem",
    borderWidth: "2.5px",
    borderStyle: "solid",
    borderColor: "transparent",
    backgroundImage: "linear-gradient(225deg, #7D0202, #B25F4C)",
    backgroundOrigin: "border-box",
    backgroundClip: "border-box",
    boxShadow: "2px 1000px 1px #fff inset",
    transition: "all 0.3s ease-out",
    "&:hover": {
      boxShadow: "none",
      borderWidth: "2.5px",
      borderColor: "transparent",
      color: "#ffffff",
    },
  },
  buttonBox: {
    borderWidth: "2.5px",
    borderImageSlice: 1,
    borderColor: "#7d0202",
    color: "#ffffff",
    borderImageSource: "linear-gradient(225deg, #7D0202, #B25F4C)",
    textTransform: "none",
    "&:hover": {
      // backgroundColor: "#7d0202",
      backgroundImage: "linear-gradient(225deg, #7D0202, #B25F4C)",
      borderWidth: "2.5px",
      borderColor: "#7d0202",
      color: "#ffffff",
    },
  },
});

export const CustomButton = () => {
  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" href="" className={`px-6 ${classes.button2}`}>
        Become a member!
      </Button>
    </div>
  );
};
