import { createBrowserRouter } from "react-router";
import Main from "./Pages/Main";
import Objectives from "./Pages/Objectives";
import Journals from "./Pages/Journals";
import Journal from "./Pages/Journal";


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
  },
  {
    path: "/journals/:name", 
    Component: Journal
  }
]);

export default Router;