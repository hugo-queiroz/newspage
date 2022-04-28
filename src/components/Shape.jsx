import styled from "styled-components";
import tokens from "../assets/tokens/tokens.json";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import React, {useEffect, useState} from "react";
import Axios from 'axios';


const Shape = () => {
  const apiKey = "d4125556121144b9b0c23c699dc5fd4d";
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
      setArticles(res.data.articles);
    };
    getArticles();
  });

  // styles
  const Shape = styled.article`
    border: ${tokens.border.size.none.value};
    padding: ${tokens.spacing.size.sm.value};
    background-color: ${tokens.neutral.color[1].value};
    width: 25%;
    margin: ${tokens.spacing.size.sm.value} 0 0 0;
    @media(max-width: 1312px) {
      width: 40%;
    }
    @media(max-width: 1193px) {
      width: 38%;
    }
    @media(max-width: 1192px) {
      width: 100%;
    }
  `;

  /*  */
  return (
    articles.map(({ title, description, url }) => (
      <Shape>
        <Heading title={title} />
        <Paragraph description={description} />
        <Button url={url} />
      </Shape>
    ))
  );
};

export default Shape;