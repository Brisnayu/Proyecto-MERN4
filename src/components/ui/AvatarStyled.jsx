import styled from "styled-components";

const StyleAvatar = styled.div`
  border-radius: 200px 200px 0px 0px;
  -moz-border-radius: 200px 200px 0px 0px;
  -webkit-border-radius: 200px 200px 0px 0px;
  width: 150px;
  height: 250px;
  background-image: ${({ $image }) => $image};
  /* background-image: url("https://cdn-icons-png.flaticon.com/512/2810/2810758.png"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: var(--color-secondary);
`;

const AvatarStyled = ({ children, $image }) => {
  return <StyleAvatar $image={$image}>{children}</StyleAvatar>;
};

export default AvatarStyled;
