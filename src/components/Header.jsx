import Navigation from "./Navigation";
import CursiveStyled from "./ui/CursiveStyled";
import HeaderStyled from "./ui/HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <CursiveStyled>Patitas.com</CursiveStyled>
      <Navigation />
      <button>CAMBIAR TEMA</button>
    </HeaderStyled>
  );
};

export default Header;
