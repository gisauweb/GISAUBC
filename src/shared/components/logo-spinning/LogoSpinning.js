import React from "react";
import LogoGisau from "assets/gisau-logo/gisau.png";

import "./LogoSpinning.css";

export const LogoSpinning = (props) => {
  return (
    <div className="text-center grid justify-center">
      <img
        src={LogoGisau}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="GISAU logo"
        className="logo w-44 lg:w-52 xl:w-64 mt-36"
      />
    </div>
  );
};
