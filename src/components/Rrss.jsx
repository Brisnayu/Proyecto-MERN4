import React from "react";

import { InformationRrss } from "../functions/InformationRrss";
import { StyleDiv } from "./ui/DivStyled";

const Rrss = () => {
  return (
    <StyleDiv $flexD={"row"}>
      {InformationRrss.map((info) => (
        <a key={info.id} href={info.webUrl} target="_blank" rel="noreferrer">
          <img style={{ height: "5rem" }} src={info.icon} alt={info.alt} />
        </a>
      ))}
    </StyleDiv>
  );
};

export default Rrss;
