import styled from "styled-components";
import tokens from "../assets/tokens/tokens.json";
import Shape from "../components/Shape";

const CardContent = () => {
  const CardContent = styled.section`
    width: 100%;
    margin: ${tokens.spacing.size.xl.value} 0 0 0;
    display: flex;
    justify-content: start;
    gap: 0 calc(${tokens.spacing.size.xxs.value} + 5px);
    flex-wrap: wrap;
  `
  return (
    <CardContent>
      <Shape/>
    </CardContent>
  );
};

export default CardContent;
