import React from "react";
import { LandingButton } from "./LandingButton";

export const Button = ({ landingButton, className, text, transparentBg }) => {
  if (landingButton) {
    return <LandingButton className={className} text={text} />;
  }

  return (
    <div className={className}>
      <div className={`button`}>{text}</div>
    </div>
  );
};
