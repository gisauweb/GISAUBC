import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ReactComponent as NavLogoWhite } from "../../../assets/gisau-logo/gisau_white.svg";
import { ReactComponent as NavLogoBlack } from "../../../assets/gisau-logo/gisau_icon.svg";
import { pages } from "./constants";
import { Box } from "@mui/material";
import { MenuInterface } from "./MenuInterface";

export const NavigationBar = () => {
  const location = useLocation();
  const isHomePage =
    location.pathname === "/" || location.pathname === "/events";

  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClosingMenu = () => {
    setIsMenuOpen(false);

    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };

  const handleOpeningMenu = () => {
    setIsMenuOpen(true);

    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    handleClosingMenu(); // Close the navigation panel
  }, [location.pathname]);

  return (
    <div className={isMenuOpen ? "overflow-y-hidden" : "overflow-y-visible"}>
      <Box
        className={`flex justify-between items-center z-10 w-full mt-[5vh] absolute ${
          isHomePage && "absolute"
        }`}
      >
        <Box className={`ml-6 sm:ml-20 md:ml-6 lg:ml-20`}>
          <Link to="/">
            {isHomePage ? (
              <NavLogoWhite className="w-14 sm:w-16 h-auto" />
            ) : (
              <NavLogoBlack className={`w-14 sm:w-16 h-auto`} />
            )}
          </Link>
        </Box>
        {isMobile ? (
          <div className={`mr-6 sm:mr-20`}>
            <MenuInterface
              isOpen={isMenuOpen}
              closeHandler={handleClosingMenu}
              openHandler={handleOpeningMenu}
              isHomePage={isHomePage}
            />
          </div>
        ) : (
          <Box className="flex mr-6 lg:mr-20">
            {pages.map((page) =>
              page.name !== "Eventsss" ? (
                page.newPage ? (
                  <Link key={page.name} to={page.path} className="px-5 pt-3">
                    <p
                      className={`hover:underline underline-offset-8 decoration-2 font-oswald text-xl ${
                        page.path === "polling"
                          ? "text-primary font-semibold"
                          : isHomePage
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      {page.name}
                    </p>
                  </Link>
                ) : (
                  <a href={page.path} className="px-5 pt-3">
                    <p
                      className={`hover:underline underline-offset-8 decoration-2 font-oswald text-xl ${
                        isHomePage ? "text-white" : "text-black"
                      }`}
                    >
                      {page.name}
                    </p>
                  </a>
                )
              ) : (
                <></>
              )
            )}
          </Box>
        )}
      </Box>
      <Box>
        <Outlet />
      </Box>
    </div>
  );
};
