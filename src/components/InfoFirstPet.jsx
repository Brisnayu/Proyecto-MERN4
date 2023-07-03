import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import TitleStyled from "./ui/TitleStyled";

const InfoFirstPet = ({ array, iconPet, pet }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={
          <img src="./src/assets/icon-arrow.png" alt="icon-arrow" width="35rem" />
        }
      >
        <img
          src={iconPet}
          alt="icon-fish"
          style={{ height: "4.5rem", marginRight: "2rem" }}
        />
        <TitleStyled>Consejos para tu primer {pet} en tu hogar</TitleStyled>
      </AccordionSummary>
      <AccordionDetails>
        <ul>
          {array.map((advice) => (
            <li key={uuidv4()}>✅ {advice}</li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};

export default InfoFirstPet;
