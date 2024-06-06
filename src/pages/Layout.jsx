import React from "react";
import { Outlet } from "react-router-dom";

import styled from "styled-components";
import { Link } from "react-router-dom";

import { GiKnifeFork } from "react-icons/gi";
import Category from "../components/Category";
import Search from "../components/Search";

function Layout() {
  return (
    <>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Delicious</Logo>
      </Nav>
      <Search />
      <Category />
      <Outlet />
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
export default Layout;
