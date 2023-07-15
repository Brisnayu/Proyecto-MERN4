import { Avatar, CardContent, CardHeader, Paper, Rating } from "@mui/material";

import CursiveStyled from "./ui/CursiveStyled";

const CardReviews = ({ avatar, nombre, stars, texto }) => {
  return (
    <Paper>
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
      <CardContent>
        <p style={{ color: "var(--color-secondary)" }}>{texto}</p>
      </CardContent>
    </Paper>
  );
};

export default CardReviews;
