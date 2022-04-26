import styled from "styled-components";
import tokens from "../assets/tokens/tokens.json";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

const Shape = () => {
  // styles
  const Shape = styled.div`
    background-color: ${tokens.neutral.color[1].value};
    padding: ${tokens.spacing.size.sm.value};
    border: ${tokens.border.size.none.value};
    /* border-radius: ${tokens.radius.size.sm.value}; */
  `;

  /*  */
  return (
    <Shape>
      <Heading/>
      <Paragraph/>
      <Button/>
    </Shape>
  );
};

export default Shape;