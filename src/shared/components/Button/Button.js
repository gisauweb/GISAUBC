import React from "react";
import { LandingButton } from "./LandingButton";

export const Button = ({ className, landingButton }) => {
  if (landingButton) {
    return <LandingButton className={className} />;
  }

  return <div>Button</div>;
};
