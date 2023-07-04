import styled from "styled-components";

const StyleDiv = styled.div`
  display: flex;
  flex-direction: ${({ $flexD }) => ($flexD === "row" ? "row" : "column")};
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  margin: 2rem 0;

  @media only screen and (max-width: 960px) {
    /* border: 5px solid green; */
    align-items: center;
    margin-bottom: 1rem;
  }
`;

const DivStyled = ({ children, $flexD }) => {
  return <StyleDiv $flexD={$flexD}>{children}</StyleDiv>;
};

export default DivStyled;
