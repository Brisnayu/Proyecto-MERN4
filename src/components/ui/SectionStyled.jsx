import styled from "styled-components";

import CursiveStyled from "./CursiveStyled";
import { StyleDiv } from "./DivStyled";
import SubTitle from "./SubtitleStyled";

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
  width: 100%;
  height: 100%;

  img {
    height: 20rem;
    transform: scaleX(-1);
    border-radius: 10px;
  }

  @media only screen and (max-width: 960px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    align-content: center;
    padding: 0;

    img {
      width: 90%;
      height: auto;
    }
  }
`;

const SectionStyled = ({ src, alt, cursive, title, parraf }) => {
  return (
    <StyleSection>
      <StyleDiv $flexD={"column"}>
        <img src={src} alt={alt} />
      </StyleDiv>
      <StyleDiv $flexD={"column"}>
        <CursiveStyled> {cursive} </CursiveStyled>
        <SubTitle> {title} </SubTitle>
        <p> {parraf} </p>
      </StyleDiv>
    </StyleSection>
  );
};

export default SectionStyled;
