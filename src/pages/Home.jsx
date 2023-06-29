import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import React from "react";

import ArticleStyled from "../components/ui/ArticleStyled";
import MainStyled from "../components/ui/MainStyled";
import SectionStyled from "../components/ui/SectionStyled";
import TitleStyled from "../components/ui/TitleStyled";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: "#1A2027",
}));

const Home = () => {
  return (
    <MainStyled>
      <ArticleStyled background={`url("./img-main.jpg")`} height={"80vh"}>
        <TitleStyled color={"text"} fontsize={"5rem"}>
          {`We're`} Happy To Pamper Your Pets!
        </TitleStyled>
      </ArticleStyled>

      <ArticleStyled height={"15vh"} top={"-4rem"} padding={"0 15rem"}>
        <Grid container rowSpacing={1} columnSpacing={{ md: 3 }}>
          <Grid item xs={4}>
            <Item>
              <h3>Natural Pet Foods</h3>
              <p>Premium natural pet food from the brands you know</p>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <h3>Toys & Supplies</h3>
              <p>If you have a pet, you need toys and we have a huge selection</p>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <h3>Grooming</h3>
              <p>PetsLand is proud to offer full service GroomShops</p>
            </Item>
          </Grid>
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
