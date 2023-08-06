import styled from "styled-components";

const StyleNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(10px);
  position: fixed;
  z-index: 2;
  top: 0;
  right: ${({ $open }) => ($open ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  transition: right 0.3s linear;
  padding-top: ${({ $open }) => ($open ? "10vh" : "0")};

  @media only screen and (min-width: 960px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
  }
`;

const NavStyled = ({ children, $open }) => {
  return <StyleNavbar $open={$open}>{children}</StyleNavbar>;
};

export default NavStyled;
