import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const Cuisine = lazy(() => import("./Cuisine"));
const Searched = lazy(() => import("./Searched"));
const Recipes = lazy(() => import("./Recipes"));
const Layout = lazy(() => import("./Layout"));

function Pages() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/recipes/:name" element={<Recipes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Pages;
