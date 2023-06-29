import React from "react";

import ArticleStyled from "../components/ui/ArticleStyled";
import MainStyled from "../components/ui/MainStyled";

const FirstPet = () => {
  return (
    <MainStyled>
      <ArticleStyled
        background={`url("https://img.freepik.com/foto-gratis/adorable-retrato-cachorro-jack-russell-retriever_53876-64825.jpg")`}
        height={"70vh"}
      ></ArticleStyled>
      FirstPet
    </MainStyled>
  );
};

export default FirstPet;
