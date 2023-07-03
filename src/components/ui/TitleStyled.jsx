import styled from "styled-components";

const StyleTitle = styled.h2`
  display: flex;
  align-items: center;
  width: 32rem;
  /* color: var(--color-background); */
  color: ${({ $color }) => ($color === "white" ? "var(--color-background)" : "black")};
  font-family: "PT Sans", sans-serif;
  /* font-size: 5rem; */
  font-size: ${({ $fontsize }) => $fontsize};
  font-weight: bolder;
  /* border: 1px solid yellow; */
`;

const TitleStyled = ({ children, $color, $fontsize }) => {
  return (
    <StyleTitle $color={$color} $fontsize={$fontsize}>
      {children}
    </StyleTitle>
  );
};

export default TitleStyled;
