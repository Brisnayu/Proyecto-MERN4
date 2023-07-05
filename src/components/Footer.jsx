import Rrss from "./Rrss";
import CursiveStyled from "./ui/CursiveStyled";
import FooterStyled from "./ui/FooterStyled";

const Footer = () => {
  return (
    <FooterStyled>
      <CursiveStyled>PetsLand.com</CursiveStyled>
      <Rrss />
      <p>Creado con amor 💕 por Brisna Páez para Rock{"{TheCode}"}.</p>
    </FooterStyled>
  );
};

export default Footer;
