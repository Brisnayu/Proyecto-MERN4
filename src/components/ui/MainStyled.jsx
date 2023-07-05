import styled from "styled-components";

const StyleMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  font-family: "PT Sans", sans-serif;
`;

const MainStyled = ({ children }) => {
  return <StyleMain>{children}</StyleMain>;
};

export default MainStyled;
