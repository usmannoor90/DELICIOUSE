import React, { Suspense, lazy } from "react";
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
        <Suspense>
          <Routes>
            <Route element={<Layout />}>
              <Route path="DELICIOUSE/" element={<Home />} />
              <Route path="DELICIOUSE/cuisine/:type" element={<Cuisine />} />
              <Route
                path="DELICIOUSE/searched/:search"
                element={<Searched />}
              />
              <Route path="DELICIOUSE/recipes/:name" element={<Recipes />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default Pages;
