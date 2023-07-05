import InfoFirstPet from "../components/InfoFirstPet";
import { StyleInfoFirstPet } from "../components/ui/DivStyled";
import MainStyled from "../components/ui/MainStyled";
import SectionStyled from "../components/ui/SectionStyled";
import {
  firstBird,
  firstCat,
  firstDog,
  firstFish,
  firstRabbit,
  firstTortoise,
} from "../functions/InformationPets";

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
      ></SectionStyled>

      <StyleInfoFirstPet>
        <InfoFirstPet
          array={firstDog}
          iconPet="./src/assets/icon-pets/icon-dog.png"
          pet="perro"
        />
        <InfoFirstPet
          array={firstCat}
          iconPet="./src/assets/icon-pets/icon-cat.png"
          pet="gato"
        />
        <InfoFirstPet
          array={firstRabbit}
          iconPet="./src/assets/icon-pets/icon-rabbit.png"
          pet="conejo"
        />
        <InfoFirstPet
          array={firstTortoise}
          iconPet="./src/assets/icon-pets/icon-tortoise.png"
          pet="/ primera tortuga"
        />
        <InfoFirstPet
          array={firstFish}
          iconPet="./src/assets/icon-pets/icon-fish.png"
          pet="pez"
        />
        <InfoFirstPet
          array={firstBird}
          iconPet="./src/assets/icon-pets/icon-bird.png"
          pet="ave"
        />
      </StyleInfoFirstPet>
    </MainStyled>
  );
};

export default FirstPet;
