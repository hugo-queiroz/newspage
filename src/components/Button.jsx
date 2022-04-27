import styled from "styled-components";
import tokens from "../assets/tokens/tokens.json";

const Button = ({ url }) => {
  const ButtonWrapper = styled.div`
    margin: ${tokens.spacing.size.sm.value} 0 0 0;
    display: flex;
  `,
  Button = styled.a`
    font-size: ${tokens.font.size.xs.value};
    font-weight: ${tokens.font.weight.regular.value};
    line-height: ${tokens.line.height.tight.value};
    color: ${tokens.neutral.color[1].value};
    background: ${tokens.brand.color.primary[3].value};
    padding: ${tokens.spacing_squish.size.sm.stack.value};
    border: ${tokens.border.size.none.value};
  `
  return (
    <ButtonWrapper>
      <Button href={url}>Ler Notícia</Button>
    </ButtonWrapper>
  );
};

export default Button;
