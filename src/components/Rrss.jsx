import React from "react";

import { InformationRrss } from "../functions/InformationRrss";
import DivStyled from "./ui/DivStyled";

const Rrss = () => {
  return (
    <DivStyled $flexD={"row"}>
      {InformationRrss.map((info) => (
        <a key={info.id} href={info.webUrl} target="_blank" rel="noreferrer">
          <img style={{ height: "5rem" }} src={info.icon} alt={info.alt} />
        </a>
      ))}
    </DivStyled>
  );
};

export default Rrss;
