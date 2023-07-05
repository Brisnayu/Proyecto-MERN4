import { NavLink } from "react-router-dom";

import NavStyled from "./ui/NavStyled";
import UlStyled from "./ui/UlStyled";

const LinkPages = ({ handleClick, $open }) => {
  return (
    <NavStyled $open={$open}>
      <UlStyled>
        <li>
          <NavLink onClick={handleClick} to="/">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClick} to="/first-pet">
            Primera Mascota
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClick} to="/gallery">
            Galería
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClick} to="/shop">
            Tienda
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClick} to="/reviews">
            Comentarios
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClick} to="/about-us">
            Equipo
          </NavLink>
        </li>
      </UlStyled>
    </NavStyled>
  );
};

export default LinkPages;
