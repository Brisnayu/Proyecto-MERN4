import Carousel from "react-material-ui-carousel";
import { v4 as uuidv4 } from "uuid";

import { feedback } from "../functions/Feedback";
import CardReviews from "./CardReviews";

const CarouselReviews = () => {
  return (
    <Carousel>
      {feedback.map((item) => (
        <CardReviews
          key={uuidv4()}
          avatar={item.avatar}
          nombre={item.nombre}
          stars={item.stars}
          texto={item.texto}
        />
      ))}
    </Carousel>
  );
};

export default CarouselReviews;
