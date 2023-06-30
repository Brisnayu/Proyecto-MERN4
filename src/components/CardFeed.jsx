import styled from "@emotion/styled";
import { CardContent, Rating } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";

import CursiveStyled from "./ui/CursiveStyled";

const StyleCardFeed = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  gap: 1rem;
  height: ${(props) => props.height};
  border-radius: 15px;
  border: 3px solid var(--color-secondary);
  background-color: var(--color-background);
  position: relative;

  -webkit-box-shadow: 18px -13px 10px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 18px -13px 10px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 18px -13px 10px -6px rgba(0, 0, 0, 0.75);
  /* right: 3rem; */
  right: ${(props) => props.right + "rem"};
  filter: ${(props) => props.filter};
  animation: side 1s ease-out;

  @keyframes side {
    0% {
      transform: translate3d(30%, 0, 0);
    }
    50% {
      transform: translate3d(25%, 0, 0);
    }
    90% {
      transform: translate3d(10%, 0, 0);
    }
    100% {
      /* opacity: 1; */
      transform: none;
    }
  }
`;

const CardFeed = ({ avatar, nombre, stars, texto, position, height, filter }) => {
  return (
    <StyleCardFeed right={position} height={height} filter={filter}>
      <CardHeader
        avatar={<Avatar src={avatar} sx={{ bgcolor: "var(--color-terciary)" }}></Avatar>}
        action={
          <img
            style={{ height: "2.5rem" }}
            src="./src/assets/icon-heart.png"
            alt="icon-heart"
          />
        }
        title={<CursiveStyled fontSize={"coment"}>{nombre}</CursiveStyled>}
        subheader={<Rating name="text-feedback" value={stars} readOnly precision={0.5} />}
      />
      <CardContent style={{ width: "19rem" }}>
        <p style={{ color: "var(--color-secondary)" }}>{texto}</p>
      </CardContent>
    </StyleCardFeed>
  );
};

export default CardFeed;
