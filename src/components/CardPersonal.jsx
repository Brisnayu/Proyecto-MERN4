import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { ProfessionalsPets } from "../functions/ProfessionalsPets";
import AvatarStyled from "./ui/AvatarStyled";
import DivStyled from "./ui/DivStyled";

const ContainerProffesionals = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
`;

const CardPersonal = () => {
  return (
    <DivStyled $flexD={"row"}>
      {ProfessionalsPets.map((profile) => (
        <ContainerProffesionals key={uuidv4()}>
          <AvatarStyled $image={`url("${profile.icon}")`} />
          <h2>{profile.profesional}</h2>
          <p>{profile.profesion}</p>
        </ContainerProffesionals>
      ))}
    </DivStyled>
  );
};

export default CardPersonal;
