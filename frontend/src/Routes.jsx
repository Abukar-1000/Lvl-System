import { createBrowserRouter } from "react-router";
import Main from "./Pages/Main";
import Objectives from "./Pages/Objectives";


const Router = createBrowserRouter([
  {
    path: "/", 
    Component: Objectives
  },
  {
    path: "/skillboard", 
    Component: Main
  }
]);

export default Router;