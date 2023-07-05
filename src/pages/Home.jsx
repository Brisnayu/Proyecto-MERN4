import Grid from "@mui/material/Grid";

import CardHome from "../components/CardHome";
import { PopupDialog } from "../components/PopupDialog";
import ArticleStyled from "../components/ui/ArticleStyled";
import MainStyled from "../components/ui/MainStyled";
import SectionStyled from "../components/ui/SectionStyled";
import TitleStyled from "../components/ui/TitleStyled";

const Home = () => {
  return (
    <MainStyled>
      <ArticleStyled $background={`url("./img-main.jpg")`} $height={"80vh"}>
        <TitleStyled $color={"white"} $fontsize={"5rem"}>
          ¡Estamos felices de consentir a tus mascotas!
          <PopupDialog />
        </TitleStyled>
      </ArticleStyled>

      <ArticleStyled $height={"15vh"} $top={"-4rem"} $padding={"0 3rem"} $vista={"none"}>
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
        cursive={"Bienvenido!"}
        title={"Más que una tienda de mascotas"}
        parraf={
          "PetsLand está aquí para apoyar todos los aspectos de la vida de su mascota, desde la comida hasta el juego. Entendemos sus demandas y ofrecemos el mejor servicio."
        }
      />
    </MainStyled>
  );
};

export default Home;
