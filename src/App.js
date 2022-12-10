import { Route, Routes } from "react-router-dom";
import { pages } from "./components/NavigationBar/constants";
import NavigationBar from "./components/NavigationBar/navigation-bar";
import Home from "./pages/home/home";
import SignIn from "./pages/sign-in/sign-in";

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        {pages.map((page) => (
          <Route key={page.name} path={page.path} element={page.element}/>
        ))}
      </Route>
    </Routes>
  )
}

export default App;
