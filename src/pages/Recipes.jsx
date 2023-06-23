import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function Recipes() {
  const [recipeDetails, setRecipeDetail] = useState({});

  const [activeTab, setActiveTab] = useState("instructions");

  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_DELICIOUS_KEY}`
    );
    const detailData = await data.json();
    setRecipeDetail(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div>
      <DetailWrapper
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h3>{recipeDetails.title}</h3>
          <img src={recipeDetails.image} alt={recipeDetails.title} />
        </div>
        <Info>
          <div
            style={{
              marginBottom: "2rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              className={activeTab === "instructions" ? "active" : ""}
              onClick={() => setActiveTab("instructions")}
            >
              instructions
            </Button>

            <Button
              className={activeTab === "Ingredients" ? "active" : ""}
              onClick={() => setActiveTab("Ingredients")}
            >
              Ingredients
            </Button>
          </div>
          {activeTab === "instructions" && (
            <div>
              <h3>Summary</h3>
              <h2
                dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}
              ></h2>
              <h3>Instructions</h3>
              <h2
                dangerouslySetInnerHTML={{
                  __html: recipeDetails.instructions,
                }}
              ></h2>
            </div>
          )}
          {activeTab === "Ingredients" && (
            <ul>
              {recipeDetails.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          )}
        </Info>
      </DetailWrapper>
    </div>
  );
}

const DetailWrapper = styled(motion.div)`
  margin-top: 10rem;
  margin-bottom: 5rem;
  img {
    border-radius: 2rem;
    max-width: 100%;
  }
  .active {
    color: white;
    background: linear-gradient(35deg, #494949, #313131);
  }
  h2 {
    margin-bottom: 2rem;
    font-weight: 400;
  }
  h3 {
    font-weight: 600;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
const Button = styled.button`
   {
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
    cursor: pointer;
  }
`;
const Info = styled.div`
   {
    margin-left: 2rem;
    margin-top: 2rem;
  }
`;

export default Recipes;
