import IRoute from "../interfaces/routes";
import About from "../pages/about";
import Home from "../pages/home";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    commponent: Home,
    exact: true,
  },
  {
    path: "/about",
    name: "About Page",
    commponent: About,
    exact: true,
  },
  {
    path: "/about/:number",
    name: "About Page with number",
    commponent: About,
    exact: true,
  },
];

export default routes;
