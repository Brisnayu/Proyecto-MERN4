import { Rating } from "@mui/material";
import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";

import TitleStyled from "./ui/TitleStyled";

const StyleCardShop = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-family: "PT Sans", sans-serif;
  background-color: var(--color-background);
`;

const StyleShopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 0;
`;

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
          <TitleStyled>{product.nombre}</TitleStyled>
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
