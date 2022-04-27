import styled from "styled-components";
import tokens from "../assets/tokens/tokens.json";
import CardContent from "../components/CardContent";

const MainContent = () => {
  const MainContent = styled.main`
    width: ${tokens.container.lg};
    margin: ${tokens.spacing.size.sm.value} auto;
  `,
  Titulo = styled.h1`
    font-size: ${tokens.font.size.xxxl.value};
    color: ${tokens.neutral.color[4].value};
  `;
  return (
    <MainContent>
      <Titulo>News Page.</Titulo>
      <CardContent/>
    </MainContent>
  );
};

export default MainContent;