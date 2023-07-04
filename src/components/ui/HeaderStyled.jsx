import styled from "styled-components";

const StyleHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem 2rem;
  font-family: "Pacifico", cursive;
  font-size: 1.3rem;
  color: var(--color-primary);
  background-color: var(--color-background);
`;

const HeaderStyled = ({ children }) => {
  return <StyleHeader>{children}</StyleHeader>;
};

export default HeaderStyled;
