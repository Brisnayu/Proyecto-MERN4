import styled from "@emotion/styled";
import { CardContent, Rating } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";

import CursiveStyled from "./ui/CursiveStyled";

const StyleCardFeed = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: ${(props) => props.height};
  border-radius: 15px;
  margin: 0 1rem;
  border: 2px solid var(--color-terciary);
  position: relative;
  /* right: 3rem; */
  right: ${(props) => props.right + "rem"};
`;

const CardFeed = ({ avatar, nombre, stars, texto, position, height }) => {
  return (
    <StyleCardFeed right={position} height={height}>
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
