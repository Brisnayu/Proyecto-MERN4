export const ShopProducts = [
  {
    nombre: "Pelota de juguete",
    precio: 10.99,
    estrellas: 4.5,
    categoría: "juguetes",
    icon: "https://porelperro.com/wp-content/uploads/2021/10/3-Piezas-Juguete-Interactivo-Gato-Bola-de-Gato-Pelotas-de.jpg",
  },
  {
    nombre: "Comida para perros",
    precio: 25.99,
    estrellas: 4.2,
    categoría: "comida",
    icon: "https://images.ecestaticos.com/XKJFrabFEJ1xTt_2Ox8dFkVyV0c=/0x0:2121x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd67%2Fa8d%2F860%2Fd67a8d8604edeac49386e96e2890fe7a.jpg",
  },
  {
    nombre: "Paseo de 1 hora",
    precio: 15.99,
    estrellas: 4.7,
    categoría: "servicio",
    icon: "https://mascotafiel.com/wp-content/uploads/2016/02/paseador-de-perros_opt-compressor-1-1-1-1-1.jpg",
  },
  {
    nombre: "Juguete interactivo",
    precio: 12.99,
    estrellas: 4.0,
    categoría: "juguetes",
    icon: "https://animalcity.es/20875-home_default/dog-activity-solitario-.jpg",
  },
  {
    nombre: "Comida para gatos",
    precio: 19.99,
    estrellas: 4.4,
    categoría: "comida",
    icon: "https://www.zooplus.es/magazine/wp-content/uploads/2019/09/monoprotein-katzenfutter-1-768x511.jpg",
  },
  {
    nombre: "Rascador para gatos",
    precio: 29.99,
    estrellas: 4.6,
    categoría: "juguetes",
    icon: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/SII2TBAKKFDTRNAESSSOKTWFRI.jpg",
  },
  {
    nombre: "Cepillo para perros",
    precio: 8.99,
    estrellas: 4.1,
    categoría: "servicio",
    icon: "https://revistaboletinbiologica.com.ar/wp-content/uploads/2023/02/cepillos-de-perro-para-pelo-corto.jpg",
  },
  {
    nombre: "Comedero automático",
    precio: 34.99,
    estrellas: 4.8,
    categoría: "comida",
    icon: "https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2021/09/11/613c7fe230adf.png",
  },
  {
    nombre: "Pelota de goma",
    precio: 6.99,
    estrellas: 3.9,
    categoría: "juguetes",
    icon: "https://m.media-amazon.com/images/I/71PD1jE5BQL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    nombre: "Snacks para perros",
    precio: 9.99,
    estrellas: 4.3,
    categoría: "comida",
    icon: "https://es.zooexperte.com/image/cache/catalog/Der_Zoo_Exsperte/Products/New_Hundesnacks/freeze-snack-risengarnelen-product-picture-with-dog-1-800x800.jpg",
  },
];

// Categories:

const unicos = ShopProducts.map((elemento) => elemento.categoría);
export const categories = unicos.filter((item, index) => unicos.indexOf(item) === index);
