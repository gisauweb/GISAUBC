import { Home } from "pages/home/Home";
import { UpcomingPage } from "shared/layout/upcoming-page/UpcomingPage";

export const pages = [
  { name: "Home", path: "", element: <Home /> },
  { name: "About", path: "about", element: <UpcomingPage /> },
  { name: "Events", path: "events", element: <UpcomingPage /> },
  { name: "Rantangan", path: "rantangan", element: <UpcomingPage /> },
  { name: "Partners", path: "partners", element: <UpcomingPage /> },
  // { name: "Contact", path: "contact", element: <UpcomingPage /> },
];
