import React from "react";
import { makeStyles } from "@mui/styles";

import "./CustomButton.css";

const useStyles = makeStyles({
  button: {
    borderRadius: "5rem",
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
    borderRadius: "5rem",
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
  button3: {
    color: "#000",
    display: "inline-block",
    position: "relative",
    zIndex: 0,
    background: "none",
    border: "none",
    boxShadow: "2px 1000px 1px #fff inset",
    transition: "all 0.3s ease-out",
    "&:before": {
      content: '""',
      position: "absolute",
      zIndex: -1,
      inset: 0,
      padding: "2.5px",
      borderRadius: "5rem",
      background: "linear-gradient(225deg, #7d0202, #b25f4c)",
      "&::-webkit-mask":
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      "&::-webkit-mask-composite": "xor",
      maskComposite: "exclude",
      transition: "all 0.3s ease-out",
    },
    "&:hover": {
      "&:before": {
        maskComposite: "initial",
      },
    },
  },
});

export const CustomButton = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={className}>
      {/*<Button
        variant="outlined"
        href=""
        className={`px-8 py-3 font-oswald normal-case font-normal text-lg ${classes.button2}`}
      >
        Become a member!  
  </Button>
      <button
        className={`${classes.button3} px-8 py-3 font-oswald normal-case font-normal text-lg`}
      >
        Become a member!
      </button>
      */}
      <div
        className={`button px-8 py-3 font-oswald normal-case font-normal text-lg`}
      >
        Become a member!
      </div>
    </div>
  );
};
