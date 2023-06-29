import styled from "styled-components";

const StyleDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.flexD === "row" ? "row" : "column")};
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
`;

const DivStyled = ({ children, flexD }) => {
  return <StyleDiv flexD={flexD}>{children}</StyleDiv>;
};

export default DivStyled;
