import { styled } from "styled-components";

const StyleButtonNav = styled.button`
  border: none;
  display: flex;
  border-radius: 20px;
  margin: 0 0 10px 10px;
  cursor: pointer;

  > img {
    width: 40px;
  }

  @media only screen and (min-width: 960px) {
    display: none;
  }
`;

const ButtonNavStyled = ({ children, onClick }) => {
  return <StyleButtonNav onClick={onClick}>{children}</StyleButtonNav>;
};

export default ButtonNavStyled;
