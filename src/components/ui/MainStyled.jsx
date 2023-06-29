import styled from "styled-components";

const StyleMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid red;
  width: 100%;
  height: 140vh;
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
