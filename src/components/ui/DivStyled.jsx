import styled from "styled-components";

const StyleDiv = styled.div`
  display: flex;
  flex-direction: ${({ $flexD }) => ($flexD === "row" ? "row" : "column")};
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
`;

const DivStyled = ({ children, $flexD }) => {
  return <StyleDiv $flexD={$flexD}>{children}</StyleDiv>;
};

export default DivStyled;
