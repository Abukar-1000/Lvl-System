import { createBrowserRouter } from "react-router";
import Main from "./Pages/Main";
import Objectives from "./Pages/Objectives";
import Journals from "./Pages/Journals";


const Router = createBrowserRouter([
  {
    path: "/", 
    Component: Objectives
  },
  {
    path: "/skillboard", 
    Component: Main
  },
  {
    path: "/journals", 
    Component: Journals
  }
]);

export default Router;