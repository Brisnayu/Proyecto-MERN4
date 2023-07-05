import CardPersonal from "../components/CardPersonal";
import MainStyled from "../components/ui/MainStyled";
import SectionStyled from "../components/ui/SectionStyled";

const AboutUs = () => {
  return (
    <MainStyled>
      <SectionStyled
        src={"https://www.sicveterinaria.es/wp-content/uploads/mascotas-portada.png"}
        alt={"image-pets"}
        cursive={"Nuestro equipo!"}
        title={"Conoce a nuestro equipo"}
        parraf={"100% real professionals not fake."}
      ></SectionStyled>
      <CardPersonal />
    </MainStyled>
  );
};

export default AboutUs;
