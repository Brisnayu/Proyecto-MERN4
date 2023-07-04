import React from "react";
import { styled } from "styled-components";

import CarouselReviews from "../components/Carousel";
import MainStyled from "../components/ui/MainStyled";
import SectionStyled from "../components/ui/SectionStyled";

const CarouselContainer = styled.div`
  padding: 3rem;
  margin: 2rem;
  width: 50%;
  height: 100%;
  border: 3px solid var(--color-secondary);
  -webkit-box-shadow: 18px -13px 10px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 18px -13px 10px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 18px -13px 10px -6px rgba(0, 0, 0, 0.75);

  @media only screen and (max-width: 960px) {
    width: 95%;
  }
`;

const Reviews = () => {
  return (
    <MainStyled>
      <SectionStyled
        src={
          "https://us.123rf.com/450wm/lilun/lilun1209/lilun120900001/15419641-gato-y-perro-gatito-brit%C3%A1nico-y-franc%C3%A9s-bulldog-cachorro.jpg"
        }
        alt={"image-cat-and-dog"}
        cursive={"Reviews!"}
        title={"What Our Clients Say About Us"}
        parraf={"100% real feedback from 100% real customers."}
      ></SectionStyled>
      <CarouselContainer>
        <CarouselReviews />
      </CarouselContainer>
    </MainStyled>
  );
};

export default Reviews;
