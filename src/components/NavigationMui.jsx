import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

import CursiveStyled from "./ui/CursiveStyled";
import UlStyled from "./ui/UlStyled";

// const HeaderWrapper = styled.header`
//   height: 10vh;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 5em;
//   border: 1px solid red;
// `;

const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  align-items: center;
  /* background: turquoise; */
  backdrop-filter: blur(10px);
  position: fixed;
  z-index: 2;
  top: 10vh;
  right: ${(props) => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  transition: right 0.3s linear;

  @media only screen and (min-width: 960px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
  }
`;

const MenuButtonWrapper = styled.button`
  border: none;
  display: flex;

  @media only screen and (min-width: 960px) {
    display: none;
  }
`;

const NavigationMui = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <CursiveStyled>PetsLand.com</CursiveStyled>
      <NavbarWrapper open={open}>
        <UlStyled>
          <li>
            <NavLink onClick={handleClick} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} to="/first-pet">
              First Pet
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} to="/gallery">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} to="/shop">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} to="/reviews">
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} to="/about-us">
              About Us
            </NavLink>
          </li>
        </UlStyled>
      </NavbarWrapper>
      <MenuButtonWrapper onClick={handleClick}>
        <img
          style={{ width: "40px" }}
          src="/src/assets/icon-hamburger.png"
          alt="icon-menu"
        />
      </MenuButtonWrapper>
    </>
  );
};

export default NavigationMui;
