import { v4 as uuidv4 } from "uuid";

import { ProfessionalsPets } from "../functions/ProfessionalsPets";
import AvatarStyled from "./ui/AvatarStyled";
import { ContainerProffesionals, StyleDiv } from "./ui/DivStyled";
import SubTitle from "./ui/SubtitleStyled";

const CardPersonal = () => {
  return (
    <StyleDiv $flexD={"row"}>
      {ProfessionalsPets.map((profile) => (
        <ContainerProffesionals key={uuidv4()}>
          <AvatarStyled $image={`url("${profile.icon}")`} />
          <SubTitle>{profile.profesional}</SubTitle>
          <p>{profile.profesion}</p>
        </ContainerProffesionals>
      ))}
    </StyleDiv>
  );
};

export default CardPersonal;
