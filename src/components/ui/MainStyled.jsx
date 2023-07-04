import styled from "styled-components";

const StyleMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  font-family: "PT Sans", sans-serif;
`;

// const StyleFondo = styled.div`
//   ${(props) =>
//     props.imgObj && props.imgObj.url && `background-image: (${props.imgObj.url})`};
// `;

const MainStyled = ({ children }) => {
  return <StyleMain>{children}</StyleMain>;
};

export default MainStyled;

// export const DivFondo = ({ imgObj, children }) => {
//   return <StyleFondo imgObj={imgObj}>{children}</StyleFondo>;
// };
