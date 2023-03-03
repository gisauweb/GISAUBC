import { Home } from "pages/home/Home";
import { About } from "pages/about/About";

export const pages = [
  { name: "Home", path: "", element: <Home /> },
  { name: "About", path: "about", element: <About /> },
  { name: "Events", path: "events", element: <Home /> },
  { name: "Rantangan", path: "rantangan", element: <Home /> },
  { name: "Partners", path: "partners", element: <Home /> },
  { name: "Contact", path: "contact", element: <Home /> },
];
