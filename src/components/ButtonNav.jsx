import ButtonNavStyled from "./ui/ButtonStyled";

const ButtonNav = ({ functionality, src, alt }) => {
  return (
    <ButtonNavStyled onClick={functionality}>
      <img src={src} alt={alt} />
    </ButtonNavStyled>
  );
};

export default ButtonNav;
