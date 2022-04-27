import styled from "styled-components";
import tokens from "../assets/tokens/tokens.json";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import React, {useEffect, useState} from "react";
import Axios from 'axios';


const Shape = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=d4125556121144b9b0c23c699dc5fd4d");
      setArticles(res.data.articles);
    };
    getArticles();
  });

  // styles
  const Shape = styled.div`
    border: ${tokens.border.size.none.value};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    article {
      padding: ${tokens.spacing.size.sm.value};
      background-color: ${tokens.neutral.color[1].value};
      width: 40%;
      margin: ${tokens.spacing.size.sm.value} 0 0 0;
    }
  `;

  /*  */
  return (
    <Shape>
      {articles.map(({ title, description, url }) => (
        <article>
          <Heading title={title} />
          <Paragraph description={description} />
          <Button url={url} />
        </article>
      ))}
    </Shape>
  );
};

export default Shape;