import Home from "./Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Category from "../components/Category";
import Searched from "./Searched";
import Search from "../components/Search";
import Recipes from "./Recipes";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

function Pages() {
  return (
    <>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Delicious</Logo>
        </Nav>
        <Search />
        <Category />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipes/:name" element={<Recipes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
const Logo = styled(Link)`
   {
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: "Lobster Two", cursive;
  }
`;

const Nav = styled.div`
   {
    padding: 4rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  svg {
    font-size: 2rem;
  }
`;

export default Pages;
