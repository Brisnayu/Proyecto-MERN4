import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React from "react";

import ArticleStyled from "../components/ui/ArticleStyled";
import MainStyled from "../components/ui/MainStyled";

const FirstPet = () => {
  return (
    <MainStyled>
      <ArticleStyled
        background={`url("https://1.bp.blogspot.com/-GK25c7lX6Bg/YKx9P-DDxrI/AAAAAAAAIm0/IFMeSHQbAvkifmCLaom7e0Pu5hZf6uhWgCLcBGAsYHQ/s700/cuidado-gatitos-bebes-01.jpeg")`}
        height={"70vh"}
      ></ArticleStyled>
      <Accordion>
        <AccordionSummary
          expandIcon={"✅"}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={"✅"}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </MainStyled>
  );
};

export default FirstPet;
