import { v4 as uuidv4 } from "uuid";

import { categories } from "../functions/ShopProducts";
import LabelStyle from "./ui/SelectStyled";

const CardSelect = ({ product, setProduct }) => {
  return (
    <>
      <LabelStyle text={"Puedes filtrar por la categoría de lo que estés buscando!"} />

      <select
        name="categories-products"
        onChange={(event) => setProduct(event.target.value)}
        value={product}
      >
        <option value="todo">Todo</option>
        {categories.map((category) => (
          <option key={uuidv4()} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default CardSelect;
