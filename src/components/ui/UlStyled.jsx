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

  li {
    text-align: center;
    width: 5rem;
    height: 100%;
  }

  @media only screen and (max-width: 960px) {
    flex-direction: column;
    position: initial;
    height: auto;
    justify-content: center;
    background-color: var(--color-background);
    width: 100%;
    height: auto;
    padding: 2rem 0;
  }
`;

const UlStyled = ({ children }) => {
  return <StyleUl>{children}</StyleUl>;
};

export default UlStyled;
