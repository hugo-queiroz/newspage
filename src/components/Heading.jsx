import styled from "styled-components";
import tokens from "../assets/tokens/tokens.json";

const Heading = ({ title }) => {
  const Heading = styled.h3`
    font-size: ${tokens.font.size.lg.value};
    font-weight: ${tokens.font.weight.bold.value};
    line-height: ${tokens.line.height.distant.value};
    margin: 0 0 ${tokens.spacing.size.xxxs.value} 0;
  `
  return (
    <Heading>{title}</Heading>
  );
};

export default Heading;
