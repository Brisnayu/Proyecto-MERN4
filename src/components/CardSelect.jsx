import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { categories } from "../functions/ShopProducts";
import LabelStyle from "./ui/SelectStyled";

const PruebaSelect = styled.select`
  width: 10rem;
  height: 2.5rem;
  text-align: center;
  background-color: var(--color-background);
  border: 3px solid red;
  border-radius: 10px;
  font-family: "PT Sans", sans-serif;
  font-size: 1.3rem;
  text-transform: capitalize;
  font-weight: bold;
`;

const CardSelect = ({ product, setProduct }) => {
  return (
    <>
      <LabelStyle text={"Puedes filtrar por la categoría de lo que estés buscando!"} />

      <PruebaSelect
        name="categories-products"
        onChange={(event) => setProduct(event.target.value)}
        value={product}
      >
        <option value="todo">todo</option>
        {categories.map((category) => (
          <option key={uuidv4()} value={category}>
            {category}
          </option>
        ))}
      </PruebaSelect>
      <h1>Estas buscando {product}</h1>
    </>
  );
};

export default CardSelect;
