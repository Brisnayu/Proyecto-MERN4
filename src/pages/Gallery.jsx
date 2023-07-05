import { Box } from "@mui/material";
import { useEffect, useState } from "react";

import GalleryList from "../components/GalleryList";
import SectionStyled from "../components/ui/SectionStyled";
import { PetitionCatAndDog } from "../functions/PetitionApi";

const Gallery = () => {
  const [arrayCat, setArrayCat] = useState([]);
  const [arrayDog, setArrayDog] = useState([]);

  useEffect(() => {
    PetitionCatAndDog(setArrayCat, setArrayDog);
  }, []);

  return (
    <>
      <SectionStyled
        src={
          "https://static8.depositphotos.com/1361307/912/i/600/depositphotos_9121501-stock-photo-dog-and-cat.jpg"
        }
        alt={"image-cat-and-dog"}
        cursive={"Galería de mascostas!"}
        title={"Fotos de mascotas felices"}
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
