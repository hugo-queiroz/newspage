import styled from "styled-components";
import tokens from "../assets/tokens/tokens.json";

const Shape = () => {
  // styles
  const Shape = styled.article`
    width: 20%;
    background-color: ${tokens.neutral.color[1].value};
    border-radius: ${tokens.border.size.none.value};
    padding: ${tokens.spacing.size.lg.value};
    border: ${tokens.border.size.thin.value} solid ${tokens.neutral.color[4].value};
  `;

  /*  */
  return (
    <>
      <Shape></Shape>
    </>
  );
};

export default Shape;
