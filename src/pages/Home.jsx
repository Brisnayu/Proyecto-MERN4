import Grid from "@mui/material/Grid";

import CardHome from "../components/CardHome";
import ArticleStyled from "../components/ui/ArticleStyled";
import MainStyled from "../components/ui/MainStyled";
import SectionStyled from "../components/ui/SectionStyled";
import TitleStyled from "../components/ui/TitleStyled";

const Home = () => {
  return (
    <MainStyled>
      <ArticleStyled $background={`url("./img-main.jpg")`} $height={"80vh"}>
        <TitleStyled $color={"white"} $fontsize={"5rem"}>
          {`We're`} Happy To Pamper Your Pets!
        </TitleStyled>
      </ArticleStyled>

      <ArticleStyled $height={"15vh"} $top={"-4rem"} $padding={"0 3rem"}>
        <Grid container rowSpacing={1} columnSpacing={{ md: 3 }}>
          <CardHome
            title="Alimentos naturales para mascotas"
            text="Alimento natural premium para mascotas de las marcas que conoces."
          />
          <CardHome
            title="Juguetes y Suministros"
            text="Si tienes una mascota, necesitas juguetes y tenemos una gran selección."
          />
          <CardHome
            title="Cuidados"
            text="PetsLand se enorgullece de ofrecer un servicio completo."
          />
        </Grid>
      </ArticleStyled>

      <SectionStyled
        src={
          "https://c.wallhere.com/photos/10/f1/1600x1116_px_cat_images_cat_photos_cat_wallpapers_cats_cutties_feline_pictures_kittens-802964.jpg!d"
        }
        alt={"image-pet"}
        cursive={"Welcome!"}
        title={"More Than Just A pet Store"}
        parraf={
          "PetsLand is here to support every aspect of your pet's life - from food to play. We undestand you demands and offer the best service."
        }
      ></SectionStyled>
    </MainStyled>
  );
};

export default Home;
