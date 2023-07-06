import { v4 as uuidv4 } from "uuid";

import InfoFirstPet from "../components/InfoFirstPet";
import { StyleInfoFirstPet } from "../components/ui/DivStyled";
import MainStyled from "../components/ui/MainStyled";
import SectionStyled from "../components/ui/SectionStyled";
import { IconFirstPet } from "../functions/InformationPets";

const FirstPet = () => {
  return (
    <MainStyled>
      <SectionStyled
        src={
          "https://phantom-marca.unidadeditorial.es/3acad74a7b46aa6f5c8c75f1ee01a1a9/resize/828/f/jpg/assets/multimedia/imagenes/2022/11/10/16681001689615.jpg"
        }
        alt={"image-pets"}
        cursive={"Primera mascota"}
        title={"Sigue nuestros consejos"}
        parraf={"100% real advice that you can apply 100% of the time."}
      />

      <StyleInfoFirstPet>
        {IconFirstPet.map((element) => (
          <InfoFirstPet
            key={uuidv4()}
            array={element.array}
            iconPet={element.iconPet}
            pet={element.pet}
          />
        ))}
      </StyleInfoFirstPet>
    </MainStyled>
  );
};

export default FirstPet;
