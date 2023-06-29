import styled from "styled-components";

import CursiveStyled from "./CursiveStyled";
import DivStyled from "./DivStyled";
import TitleStyled from "./TitleStyled";

const StyleSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  list-style: none;
  font-family: "PT Sans", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 5rem;
  border-radius: 10px;
`;

const SectionStyled = ({ src, alt, cursive, title, parraf }) => {
  return (
    <StyleSection>
      <DivStyled flexD={"column"}>
        <img
          style={{ height: "20rem", transform: "scaleX(-1)", borderRadius: "10px" }}
          src={src}
          alt={alt}
        />
      </DivStyled>
      <DivStyled flexD={"column"}>
        <CursiveStyled> {cursive} </CursiveStyled>
        <TitleStyled> {title} </TitleStyled>
        <p> {parraf} </p>
      </DivStyled>
    </StyleSection>
  );
};

export default SectionStyled;
