import React from "react";
import { LandingButton } from "./LandingButton";

import "./Button.css";

export const Button = ({
  landingButton,
  className,
  text,
  handleClickButton,
}) => {
  if (landingButton) {
    return <LandingButton className={className} text={text} />;
  }

  return (
    <div className={className}>
      <div className={`button`} onClick={handleClickButton}>
        {text}
      </div>
    </div>
  );
};
