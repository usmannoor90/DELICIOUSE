import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Vaggie() {
  const [vaggie, setVaggie] = useState([]);

  useEffect(() => {
    getVaggie();
  }, []);

  const getVaggie = async () => {
    const check = localStorage.getItem("vaggie");
    if (check) {
      setVaggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_DELICIOUS_KEY}&number=9&tags=vegetarian`
      );

      const data = await api.json();
      localStorage.setItem("vaggie", JSON.stringify(data.recipes));
      setVaggie(data.recipes);
    }
  };
  return (
    <div>
      <Wrapper
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Our Vagitarian Picks</h3>
        <Splide
          options={{
            breakpoints: {
              700: {
                perPage: 1,
              },
              1200: {
                perPage: 2,
              },
            },
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {vaggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipes/" + recipe.id}>
                    <p> {recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled(motion.div)`
  margin: 4rem 0;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.2);
  img {
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    left: 0;
    position: absolute;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
  }
`;
const Gradient = styled.div`
   {
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  }
`;

export default Vaggie;
