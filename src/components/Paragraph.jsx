import styled from "styled-components";
import tokens from "../assets/tokens/tokens.json";

const Paragraph = ({ description }) => {
  const Paragraph = styled.p`
    font-size: ${tokens.font.size.xs.value};
    font-weight: ${tokens.font.weight.regular.value};
    line-height: ${tokens.line.height.distant.value};
    margin: ${tokens.spacing.size.xxs.value} 0 0 0;
    color: ${tokens.neutral.color[4].value};
  `
  return (
    <Paragraph>{description}</Paragraph>
  );
};

export default Paragraph;
