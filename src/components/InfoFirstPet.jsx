import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import SubTitle from "./ui/SubtitleStyled";

const InfoFirstPet = ({ array, iconPet, pet }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<img src="./assets/icon-arrow.png" alt="icon-arrow" width="35rem" />}
      >
        <img src={iconPet} alt={pet} style={{ height: "4.5rem", marginRight: "2rem" }} />
        <SubTitle>Consejos para tu primer {pet} en tu hogar</SubTitle>
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
