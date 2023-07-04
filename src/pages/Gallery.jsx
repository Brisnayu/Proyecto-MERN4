import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

import GalleryList from "../components/GalleryList";
import SectionStyled from "../components/ui/SectionStyled";

const Gallery = () => {
  const [arrayCat, setArrayCat] = useState([]);
  const [arrayDog, setArrayDog] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((res) => setArrayCat(res.data));
    axios
      .get("https://api.thedogapi.com/v1/images/search?limit=10")
      .then((res) => setArrayDog(res.data));
  }, []);

  return (
    <>
      <SectionStyled
        src={
          "https://static8.depositphotos.com/1361307/912/i/600/depositphotos_9121501-stock-photo-dog-and-cat.jpg"
        }
        alt={"image-cat-and-dog"}
        cursive={"Adopta a tu primera mascota!"}
        title={"Happily Adopted Pets"}
        parraf={"100% adopted 100% real pets."}
      ></SectionStyled>

      {arrayCat.length > 0 && (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <GalleryList arrayList={arrayCat} />
          <GalleryList arrayList={arrayDog} />
        </Box>
      )}
    </>
  );
};

export default Gallery;
