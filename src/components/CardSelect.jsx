import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { categories } from "../functions/ShopProducts";
import LabelStyle from "./ui/SelectStyled";

const ContainerSelect = styled.select`
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

      <ContainerSelect
        name="categories-products"
        onChange={(event) => setProduct(event.target.value)}
        value={product}
        data-testid="select"
      >
        <option value="todo">todo</option>
        {categories.map((category) => (
          <option key={uuidv4()} value={category}>
            {category}
          </option>
        ))}
      </ContainerSelect>
    </>
  );
};

export default CardSelect;
