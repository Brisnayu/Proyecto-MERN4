import React from "react";
import { styled } from "styled-components";

import Rrss from "./Rrss";
import CursiveStyled from "./ui/CursiveStyled";

const StyleFooter = styled.footer`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "PT Sans", sans-serif;
  background-color: var(--color-background);
  padding-bottom: 1rem;
`;

const Footer = () => {
  return (
    <StyleFooter>
      <CursiveStyled>Patitas.com</CursiveStyled>
      <Rrss />
      <p>Created with love 💕 by Brisna Páez for Rock The Code.</p>
    </StyleFooter>
  );
};

export default Footer;
