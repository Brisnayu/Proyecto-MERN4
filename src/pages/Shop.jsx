import { useEffect, useState } from "react";

import CardSelect from "../components/CardSelect";
import CardShop from "../components/CardShop";
import MainStyled from "../components/ui/MainStyled";
import SectionStyled from "../components/ui/SectionStyled";
import { ShopProducts } from "../functions/ShopProducts";

const Shop = () => {
  const [product, setProduct] = useState("todo");
  const [arrayFilter, setArrayFilter] = useState([]);

  useEffect(() => {
    setArrayFilter(ShopProducts.filter((elements) => elements.categoría === product));
  }, [product]);

  return (
    <MainStyled>
      <SectionStyled
        src={
          "https://thumbs.dreamstime.com/b/juguetes-de-perro-alimento-seco-y-tijeras-aisladas-en-fondo-blanco-concepto-accesorios-para-mascotas-collares-alimentos-secos-230572676.jpg"
        }
        alt={"image-toys"}
        cursive={"Shop!"}
        title={"Lo mejor para tus mascotas"}
        parraf={"100% real toys from 100% real stores."}
      ></SectionStyled>

      <CardSelect product={product} setProduct={setProduct} />

      <CardShop productList={product === "todo" ? ShopProducts : arrayFilter} />
    </MainStyled>
  );
};

export default Shop;
