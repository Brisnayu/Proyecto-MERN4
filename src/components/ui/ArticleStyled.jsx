import styled from "styled-components";

const StyleArticle = styled.article`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* border: 2px solid blue; */
  width: 100%;
  /* height: 70vh; */
  height: ${({ $height }) => $height};
  /* padding-left: 2rem; */
  background-image: ${({ $background }) => $background};
  /* background-color: ${(props) => (props.background === "red" ? "red" : "blue")}; */
  /* background-image: url("./img-main.jpg"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  top: ${({ $top }) => $top};
  padding: ${({ $padding }) => $padding};
  /* background-position-y: 70%; */
`;

const ArticleStyled = ({ $background, $height, $top, $padding, children }) => {
  return (
    <StyleArticle
      $background={$background}
      $height={$height}
      $top={$top}
      $padding={$padding}
    >
      {children}
    </StyleArticle>
  );
};

export default ArticleStyled;
