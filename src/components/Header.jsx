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
      <CursiveStyled>PetsLand.com</CursiveStyled>
      <LinkPages handleClick={handleClick} $open={open} />
      <ButtonNav handleClick={handleClick} />
    </HeaderStyled>
  );
};

export default Header;
