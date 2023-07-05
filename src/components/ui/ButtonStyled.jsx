import { styled } from "styled-components";

const StyleButtonNav = styled.button`
  border: none;
  display: flex;

  @media only screen and (min-width: 960px) {
    display: none;
  }
`;

const ButtonNavStyled = ({ children, onClick }) => {
  return <StyleButtonNav onClick={onClick}>{children}</StyleButtonNav>;
};

export default ButtonNavStyled;
