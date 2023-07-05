import styled from "styled-components";

const StyleTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $color }) => ($color === "white" ? "var(--color-background)" : "black")};
  font-family: "PT Sans", sans-serif;
  font-size: ${({ $fontsize }) => $fontsize};
  font-weight: bolder;
  padding: 0 5rem;

  @media only screen and (max-width: 700px) {
    padding: 0;
    font-size: 3rem;
    width: 10rem;
    height: 20rem;
    padding: 0 1rem;
  }
`;

const TitleStyled = ({ children, $color, $fontsize }) => {
  return (
    <StyleTitle $color={$color} $fontsize={$fontsize}>
      {children}
    </StyleTitle>
  );
};

export default TitleStyled;
