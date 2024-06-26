import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const sumbitHandler = (e) => {
    e.preventDefault();
    navigate(`/DELICIOUSE/searched/` + input);
  };
  return (
    <FormStyle onSubmit={sumbitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
}
const FormStyle = styled.form`
   {
    margin: 3rem auto;
    max-width: 800px;

    div {
      width: 100%;
      position: relative;
      display: flex;
      justify-content: center;
    }
    input {
      border: none;
      background: linear-gradient(35deg, #494949, #313131);
      font-size: 1.5rem;
      color: white;
      padding: 1rem 3rem;
      border: none;
      border-radius: 1rem;
      outline: none;
      position: relative;
      width: 100%;
      max-width: 800px;
    }
    svg {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(100%, -50%);
      color: white;
      z-index: 1;
    }
  }
`;

export default Search;
