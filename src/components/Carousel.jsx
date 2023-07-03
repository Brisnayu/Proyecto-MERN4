import { Avatar, CardContent, CardHeader, Paper, Rating } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

import { feedback } from "../functions/Feedback";
import CursiveStyled from "./ui/CursiveStyled";

const Item = ({ avatar, nombre, stars, texto }) => {
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
        title={<CursiveStyled $fontSize={"coment"}>{nombre}</CursiveStyled>}
        subheader={<Rating name="text-feedback" value={stars} readOnly precision={0.5} />}
      />
      <CardContent>
        <p style={{ color: "var(--color-secondary)" }}>{texto}</p>
      </CardContent>
    </Paper>
  );
};

const CarouselReviews = () => {
  return (
    <Carousel>
      {feedback.map((item, i) => (
        <Item
          key={i}
          avatar={item.avatar}
          nombre={item.nombre}
          stars={item.stars}
          texto={item.texto}
        />
      ))}
    </Carousel>
  );
};

export default CarouselReviews;
