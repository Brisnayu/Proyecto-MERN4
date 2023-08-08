import styled from "styled-components";

const StyleArticle = styled.article`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: ${({ $height }) => $height};
  background-image: ${({ $background }) => $background};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  top: ${({ $top }) => $top};
  padding: ${({ $padding }) => $padding};

  @media only screen and (max-width: 950px) {
    display: ${({ $vista }) => ($vista === "none" ? "none" : null)};
    justify-content: center;
  }
`;

const ArticleStyled = ({ $background, $height, $top, $padding, vista, children }) => {
  return (
    <StyleArticle
      $background={$background}
      $height={$height}
      $top={$top}
      $padding={$padding}
      $vista={vista}
    >
      {children}
    </StyleArticle>
  );
};

export default ArticleStyled;
