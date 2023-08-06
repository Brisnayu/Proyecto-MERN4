import { useState } from "react";

import ButtonNav from "./ButtonNav";
import LinkPages from "./LinkPages";
import CursiveStyled from "./ui/CursiveStyled";
import HeaderStyled from "./ui/HeaderStyled";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderStyled>
      <CursiveStyled>Patitas.com</CursiveStyled>
      <LinkPages handleClick={handleClick} $open={open} />
      <ButtonNav
        functionality={handleClick}
        src="/src/assets/icon-hamburger.png"
        alt="icon-menu"
      />
    </HeaderStyled>
  );
};

export default Header;
