import CarouselReviews from "../components/Carousel";
import { CarouselContainer } from "../components/ui/DivStyled";
import MainStyled from "../components/ui/MainStyled";
import SectionStyled from "../components/ui/SectionStyled";

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
