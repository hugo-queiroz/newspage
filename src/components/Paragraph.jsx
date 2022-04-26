import styled from "styled-components";
import tokens from "../assets/tokens/tokens.json";

const Paragraph = () => {
  const Paragraph = styled.p`
    font-size: ${tokens.font.size.xs.value};
    font-weight: ${tokens.font.weight.regular.value};
    line-height: ${tokens.line.height.distant.value};
    margin: ${tokens.spacing.size.xxs.value} 0 0 0;
    color: ${tokens.neutral.color[4].value};
  `
  return (
    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloremque dignissimos perferendis aliquam nam neque, quis vitae vel minus quo iste unde nobis aut quae hic mollitia similique nostrum obcaecati?</Paragraph>
  );
};

export default Paragraph;
