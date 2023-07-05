import { Rating } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import { StyleCardShop, StyleShopContainer } from "./ui/DivStyled";
import SubTitle from "./ui/SubtitleStyled";

const CardShop = ({ productList }) => {
  return (
    <StyleShopContainer>
      {productList.map((product) => (
        <StyleCardShop key={uuidv4()}>
          <img
            style={{ width: "250px", height: "250px", backgroundSize: "cover" }}
            src={product.icon}
            alt={product.nombre}
          />
          <SubTitle>{product.nombre}</SubTitle>
          <p>{product.precio}€</p>
          <Rating
            name="text-feedback"
            value={product.estrellas}
            readOnly
            precision={0.5}
          />
        </StyleCardShop>
      ))}
    </StyleShopContainer>
  );
};

export default CardShop;
