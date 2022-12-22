import { Home } from "./pages/home/Home";

import { Route, Routes } from "react-router-dom";
import { pages } from "./shared/components/NavigationBar/constants";
import NavigationBar from "./shared/components/NavigationBar/navigation-bar";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          {pages.map((page) => (
            <Route key={page.name} path={page.path} element={page.element} />
          ))}
        </Route>
      </Routes>
    </StyledEngineProvider>
  );
}

export default App;
