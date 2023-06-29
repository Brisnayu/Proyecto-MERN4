import styled from "styled-components";

const StyleUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  list-style: none;
  font-family: "PT Sans", sans-serif;
  font-size: 1rem;
  font-weight: 500;
`;

const UlStyled = ({ children }) => {
  return <StyleUl>{children}</StyleUl>;
};

export default UlStyled;
