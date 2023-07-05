import React from "react";

import CursiveStyled from "./ui/CursiveStyled";
import MainStyled from "./ui/MainStyled";

const Spinner = () => {
  return (
    <MainStyled>
      <img
        src="https://i.pinimg.com/originals/8c/af/c2/8cafc2665a04072d903521931ac15540.gif"
        alt="icon-cat"
        style={{ width: "100%", height: "100%" }}
      />
      <CursiveStyled>Cargando!!!</CursiveStyled>
    </MainStyled>
  );
};

export default Spinner;
