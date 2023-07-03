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
  height: ${({ $height }) => $height};
  border-radius: 15px;
  border: 3px solid var(--color-secondary);
  background-color: var(--color-background);
  position: relative;

  -webkit-box-shadow: 18px -13px 10px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 18px -13px 10px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 18px -13px 10px -6px rgba(0, 0, 0, 0.75);
  /* right: 3rem; */
  right: ${({ $right }) => $right + "rem"};
  filter: ${({ $filter }) => $filter};
  animation: slide-on 1s ease-in-out;

  @keyframes slide-on {
    96% {
      scroll-snap-align: center;
    }
    97% {
      scroll-snap-align: none;
    }
    99% {
      scroll-snap-align: none;
    }
    100% {
      scroll-snap-align: center;
    }
  }
`;

const CardFeed = ({ avatar, nombre, stars, texto, $position, $height, $filter }) => {
  return (
    <StyleCardFeed $right={$position} $height={$height} $filter={$filter}>
      <CardHeader
        avatar={<Avatar src={avatar} sx={{ bgcolor: "var(--color-terciary)" }}></Avatar>}
        action={
          <img
            style={{ height: "2.5rem" }}
            src="./src/assets/icon-heart.png"
            alt="icon-heart"
          />
        }
        title={<CursiveStyled $fontSize={"coment"}>{nombre}</CursiveStyled>}
        subheader={<Rating name="text-feedback" value={stars} readOnly precision={0.5} />}
      />
      <CardContent style={{ width: "19rem" }}>
        <p style={{ color: "var(--color-secondary)" }}>{texto}</p>
      </CardContent>
    </StyleCardFeed>
  );
};

export default CardFeed;
