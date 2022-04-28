import styled from "styled-components";
import tokens from "../assets/tokens/tokens.json";
import Shape from "../components/Shape";

const CardContent = () => {
  const CardContent = styled.section`
    margin: ${tokens.spacing.size.xl.value} auto;
    display: flex;
    justify-content: start;
    gap: 0 calc(${tokens.spacing.size.xxs.value} + 5px);
    flex-wrap: wrap;
    width: ${tokens.container.lg};
  `
  return (
    <CardContent>
      <Shape/>
    </CardContent>
  );
};

export default CardContent;
