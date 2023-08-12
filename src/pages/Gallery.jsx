import { Box } from "@mui/material";
import { useEffect, useState } from "react";

import ButtonNav from "../components/ButtonNav";
import GalleryList from "../components/GalleryList";
import Spinner from "../components/Spinner";
import CursiveStyled from "../components/ui/CursiveStyled";
import SectionStyled from "../components/ui/SectionStyled";
import { PetitionCatAndDog } from "../functions/PetitionApi";

const Gallery = () => {
  const [arrayCat, setArrayCat] = useState([]);
  const [arrayDog, setArrayDog] = useState([]);

  useEffect(() => {
    PetitionCatAndDog(setArrayCat, setArrayDog);
  }, []);

  const isUp = () => {
    scrollTo(0, 0);
  };

  return (
    <>
      <SectionStyled
        src={
          "https://static8.depositphotos.com/1361307/912/i/600/depositphotos_9121501-stock-photo-dog-and-cat.jpg"
        }
        alt={"image-cat-and-dog"}
        cursive={"Galería de mascotas!"}
        title={"Fotos de mascotas felices"}
        parraf={"100% adopted 100% real pets."}
      />

      {arrayCat.length > 0 ? (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <CursiveStyled>Fotos aleatorias de gatitos</CursiveStyled>
          <GalleryList arrayList={arrayCat} />
          <CursiveStyled>Fotos aleatorias de perritos</CursiveStyled>
          <GalleryList arrayList={arrayDog} />
        </Box>
      ) : (
        <Spinner />
      )}

      <ButtonNav
        functionality={isUp}
        src="/assets/icon-up.png"
        alt="icon-arrow-up"
        style={{ borderRadius: "50%" }}
      />
    </>
  );
};

export default Gallery;
