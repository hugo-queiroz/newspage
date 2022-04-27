import styled from "styled-components";
import tokens from "../assets/tokens/tokens.json";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import React, {useEffect, useState} from "react";
import Axios from 'axios';


const Shape = () => {
  const apiKey = "a686c2a504c64558a69415414ad6e6d3";
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      // const res = await Axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
      setArticles(res.data.articles);
    };
    getArticles();
  });

  // styles
  const Shape = styled.article`
    border: ${tokens.border.size.none.value};
    padding: ${tokens.spacing.size.sm.value};
    background-color: ${tokens.neutral.color[1].value};
    width: 26%;
    margin: ${tokens.spacing.size.sm.value} 0 0 0;
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