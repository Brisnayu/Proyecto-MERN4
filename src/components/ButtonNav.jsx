import ButtonNavStyled from "./ui/ButtonStyled";

const ButtonNav = ({ handleClick }) => {
  return (
    <ButtonNavStyled onClick={handleClick}>
      <img
        style={{ width: "40px" }}
        src="/src/assets/icon-hamburger.png"
        alt="icon-menu"
      />
    </ButtonNavStyled>
  );
};

export default ButtonNav;
