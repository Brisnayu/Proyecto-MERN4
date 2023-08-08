import { NavLink } from "react-router-dom";

import NavStyled from "./ui/NavStyled";
import UlStyled from "./ui/UlStyled";

const LinkPages = ({ handleClick, $open }) => {
  return (
    <NavStyled $open={$open}>
      <UlStyled>
        <NavLink onClick={handleClick} to="/">
          Inicio
        </NavLink>
        <NavLink onClick={handleClick} to="/first-pet">
          Primera Mascota
        </NavLink>

        <NavLink onClick={handleClick} to="/gallery">
          Galería
        </NavLink>

        <NavLink onClick={handleClick} to="/shop">
          Tienda
        </NavLink>

        <NavLink onClick={handleClick} to="/reviews">
          Comentarios
        </NavLink>

        <NavLink onClick={handleClick} to="/about-us">
          Equipo
        </NavLink>
      </UlStyled>
    </NavStyled>
  );
};

export default LinkPages;
