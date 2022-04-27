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
  `,
  CardsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: ${tokens.spacing.size.xl.value} 0 0 0;
  `
  return (
    <MainContent>
      <Titulo>News Page.</Titulo>
      <CardsWrapper>
        <CardContent/>
      </CardsWrapper>
    </MainContent>
  );
};

export default MainContent;