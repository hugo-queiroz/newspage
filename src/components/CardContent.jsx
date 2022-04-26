import styled from "styled-components";
import tokens from "../assets/tokens/tokens.json";
import Shape from "../components/Shape";

const CardContent = () => {
  const CardContent = styled.article`
    margin: ${tokens.spacing.size.sm.value} 0 0 0;
    width: 31%;
  `
  return (
    <CardContent>
      <Shape/>
    </CardContent>
  );
};

export default CardContent;
