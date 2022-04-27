import styled from "styled-components";
import tokens from "../assets/tokens/tokens.json";
import Shape from "../components/Shape";

const CardContent = () => {
  const CardContent = styled.article`
    width: 100%;
  `
  return (
    <CardContent>
      <Shape/>
    </CardContent>
  );
};

export default CardContent;
