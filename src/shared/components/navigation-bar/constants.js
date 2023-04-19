import { Home } from "pages/home/Home";
import { Events } from "pages/events/Events";
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
    newPage: true,
    path: "events",
    element: <Events />,
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
