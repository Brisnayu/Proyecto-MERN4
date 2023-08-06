import styled from "styled-components";

const StyleFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "PT Sans", sans-serif;
  background-color: var(--color-background);
  padding-bottom: 1rem;

  p {
    text-align: center;
  }

  img:hover {
    animation: zoom 1s ease-in;
  }
`;

const FooterStyled = ({ children }) => {
  return <StyleFooter>{children}</StyleFooter>;
};

export default FooterStyled;
