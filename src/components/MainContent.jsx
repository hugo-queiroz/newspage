import styled from "styled-components";
import tokens from "../assets/tokens/tokens.json";
import CardContent from "../components/CardContent";
import Clock from "../components/Clock";

const MainContent = () => {
  const MainContent = styled.main``,
  Banner = styled.section`
    background: ${tokens.brand.color.primary[3].value};
    padding: ${tokens.spacing.size.xxl.value};
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    @media(max-width: 1056px) {
      flex-direction: column;
      align-items: flex-start;
    }
  `,
  TextWrapper = styled.div`
    width: ${tokens.container.lg};
    margin: 0 auto;
  `,
  Subtitulo = styled.span`
    color: ${tokens.brand.color.primary[4].value};
    text-transform: uppercase;
    font-weight: ${tokens.font.weight.medium.value};
    font-size: ${tokens.font.size.xs.value};
  `,
  Titulo = styled.h1`
    font-size: ${tokens.font.size.xxxl.value};
    color: ${tokens.neutral.color[1].value};
    width: ${tokens.container.lg};
    font-size: ${tokens.font.size.xxl.value};
    text-transform: uppercase;
    margin: ${tokens.spacing.size.nano.value} 0 0 0;
  `;
  return (
    <MainContent>
      <Banner>
        <TextWrapper>
          <Subtitulo>News Page</Subtitulo>
          <Titulo>Notícias<br/>a todo minuto.</Titulo>
        </TextWrapper>
        <Clock/>
      </Banner>
      <CardContent/>
    </MainContent>
  );
};

export default MainContent;