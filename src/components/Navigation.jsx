import { NavLink } from "react-router-dom";

import UlStyled from "./ui/UlStyled";

const Navigation = () => {
  return (
    <nav>
      <UlStyled>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/first-pet">First Pet</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/reviews">Reviews</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
      </UlStyled>
    </nav>
  );
};

export default Navigation;
