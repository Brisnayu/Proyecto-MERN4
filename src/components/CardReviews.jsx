import { Avatar, CardContent, CardHeader, Paper, Rating } from "@mui/material";

import CursiveStyled from "./ui/CursiveStyled";

const CardReviews = ({ avatar, nombre, stars, texto }) => {
  return (
    <Paper>
      <CardHeader
        style={{ display: "flex", flexDirection: "column" }}
        avatar={<Avatar src={avatar} sx={{ bgcolor: "var(--color-terciary)" }}></Avatar>}
        title={<CursiveStyled fontSize={"coment"}>{nombre}</CursiveStyled>}
        subheader={<Rating name="text-feedback" value={stars} readOnly precision={0.5} />}
      />
      <CardContent>
        <p
          style={{
            color: "var(--color-secondary)",
            textAlign: "justify",
          }}
        >
          {texto}
        </p>
      </CardContent>
    </Paper>
  );
};

export default CardReviews;
