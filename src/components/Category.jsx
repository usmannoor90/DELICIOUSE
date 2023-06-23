import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink to="/cuisine/italian">
        <FaPizzaSlice />
        <h3>Italian</h3>
      </SLink>
      <SLink to="/cuisine/american">
        <FaHamburger />
        <h3>American</h3>
      </SLink>
      <SLink to="/cuisine/thai">
        <GiNoodles />
        <h3>Thai</h3>
      </SLink>
      <SLink to="/cuisine/japanese">
        <GiChopsticks />
        <h3>Japanese</h3>
      </SLink>
    </List>
  );
}

const List = styled.div`
   {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }
`;
const SLink = styled(NavLink)`
   {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 1%;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    min-width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    color: white;
  }
  h3 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;

export default Category;
