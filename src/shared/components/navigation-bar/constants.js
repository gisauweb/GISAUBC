import { Home } from "pages/home/Home";
import { Events } from "pages/events/Events";
import { Partners } from "pages/partners/Partners";
import { UpcomingPage } from "shared/layout/upcoming-page/UpcomingPage";

export const pages = [
  {
    name: "Home",
    path: "",
    element: <Home />,
  },
  {
    name: "About",
    path: "about",
    element: <UpcomingPage />,
  },
  {
    name: "Events",
    path: "events",
    element: <Events />,
  },
  {
    name: "Rantangan",
    path: "rantangan",
    element: <UpcomingPage />,
  },
  {
    name: "Partners",
    path: "partners",
    element: <Partners />,
  }
];

export const tempPage = [
  {
    name: "Contact",
    path: "#contact",
  }
]