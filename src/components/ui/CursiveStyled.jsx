import styled from "styled-components";

const StyleCursive = styled.h3`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--color-primary);
  font-family: "Pacifico", cursive;
  font-size: ${({ $fontSize }) => ($fontSize === "coment" ? "1.2rem" : "2rem")};
  font-weight: 100;
`;

const CursiveStyled = ({ children, fontSize }) => {
  return <StyleCursive $fontSize={fontSize}>{children}</StyleCursive>;
};

export default CursiveStyled;
