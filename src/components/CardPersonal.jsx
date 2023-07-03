import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { ProfessionalsPets } from "../functions/ProfessionalsPets";
import AvatarStyled from "./ui/AvatarStyled";
import DivStyled from "./ui/DivStyled";
import TitleStyled from "./ui/TitleStyled";

const ContainerProffesionals = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  border: 2px solid yellow;
`;

const CardPersonal = () => {
  return (
    <DivStyled $flexD={"row"}>
      {ProfessionalsPets.map((profile) => (
        <ContainerProffesionals key={uuidv4()}>
          <AvatarStyled $image={`url("${profile.icon}")`} />
          <TitleStyled>{profile.profesional}</TitleStyled>
          <p>{profile.profesion}</p>
        </ContainerProffesionals>
      ))}
    </DivStyled>
  );
};

export default CardPersonal;
