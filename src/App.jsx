import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProjectDetail from "./components/ProjectDetail";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="project/:id" element={<ProjectDetail />} />
    </>

  )
);


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
