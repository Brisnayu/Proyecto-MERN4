import React from "react";

import MainStyled from "./ui/MainStyled";
import TitleStyled from "./ui/TitleStyled";

const Spinner = () => {
  return (
    <MainStyled>
      <img
        src="https://i.pinimg.com/originals/8c/af/c2/8cafc2665a04072d903521931ac15540.gif"
        alt="icon-cat"
        style={{ width: "100%", height: "100%" }}
      />
      <TitleStyled>Cargando!!!</TitleStyled>
    </MainStyled>
  );
};

export default Spinner;
