import { Home } from "pages/home/Home";
import { Partners } from "pages/partners/Partners";
import { UpcomingPage } from "shared/layout/upcoming-page/UpcomingPage";

export const pages = [
  {
    name: "Home",
    newPage: true,
    path: "",
    element: <Home />,
  },
  {
    name: "About",
    newPage: true,
    path: "about",
    element: <UpcomingPage />,
  },
  {
    name: "Events",
    newPage: false,
    path: "/#events",
    element: <UpcomingPage />,
  },
  {
    name: "Eventsss",
    newPage: true,
    path: "events",
    element: <UpcomingPage />,
  },
  {
    name: "Rantangan",
    newPage: true,
    path: "rantangan",
    element: <UpcomingPage />,
  },
  {
    name: "Partners",
    newPage: true,
    path: "partners",
    element: <Partners />,
  },
  {
    name: "Contact",
    newPage: false,
    path: "/#contact",
  },
];
