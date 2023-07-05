import styled from "styled-components";

import CursiveStyled from "./CursiveStyled";
import DivStyled from "./DivStyled";

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
    /* border: 5px solid green; */
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
      <DivStyled $flexD={"column"}>
        <img src={src} alt={alt} />
      </DivStyled>
      <DivStyled $flexD={"column"}>
        <CursiveStyled> {cursive} </CursiveStyled>
        <h2> {title} </h2>
        <p> {parraf} </p>
      </DivStyled>
    </StyleSection>
  );
};

export default SectionStyled;
