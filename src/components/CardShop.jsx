import { Rating } from "@mui/material";
import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";

const StyleCardShop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-family: "PT Sans", sans-serif;
  background-color: var(--color-background);
  width: 18rem;
  height: 25rem;
  border: 3px solid var(--color-secondary);
  animation: side 2s ease-in-out;

  @keyframes side {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StyleShopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 1rem 0;
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
          <h2>{product.nombre}</h2>
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
