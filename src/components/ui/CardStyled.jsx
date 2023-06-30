import styled from "@emotion/styled";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { feedback } from "../../functions/Feedback";
import CardFeed from "../CardFeed";

const StyleCardReview = styled.div`
  border: 3px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  height: 100%;
  width: 100%;
  font-family: "PT Sans", sans-serif;
`;

const StyleCarousel = styled.div`
  display: grid;
  grid-template-columns: repeat(${feedback.length}, 22rem);
  grid-template-rows: repeat(1, 600px);
  align-items: center;
  overflow: hidden;
  /* white-space: nowrap; */
  border-radius: 15px;
  padding-left: 15px;
  height: 600px;
  width: 66rem;
  border: 2px solid yellow;
  position: absolute;
`;

const ContainerButtonCarousel = styled.div`
  position: absolute;
  display: flex;
  gap: 1rem;
  bottom: 0rem;
  gap: 70rem;
  /* border: 3px solid blue; */
  background: transparent;
`;

const StyleButtonCarousel = styled.button`
  background: transparent;
  border: none;
  cursor: ${(props) => props.cursor};
  filter: ${(props) => props.filter};
`;

const CardReviewStyled = () => {
  const [previous, setPrevius] = useState(-22);
  const [positionCurrent, setPositionCurrent] = useState(0);

  const previousComent = () => {
    if (previous === -22) {
      setPrevius(-22);
    } else {
      setPrevius(previous - 22);
      setPositionCurrent(positionCurrent - 1);
    }
  };

  const nextComent = () => {
    if (previous === 22 * (feedback.length - 2)) {
      setPrevius(22 * (feedback.length - 2));
    } else {
      setPrevius(previous + 22);
      setPositionCurrent(positionCurrent + 1);
    }
  };

  return (
    <StyleCardReview>
      <StyleCarousel>
        {feedback.map((feed, index) => (
          <CardFeed
            key={uuidv4()}
            avatar={feed.avatar}
            nombre={feed.nombre}
            stars={feed.stars}
            texto={feed.texto}
            position={previous}
            height={index === positionCurrent ? "500px" : "350px"}
            filter={index !== positionCurrent ? "grayscale(100%) blur(1px)" : "none"}
          />
        ))}
      </StyleCarousel>

      <ContainerButtonCarousel>
        <StyleButtonCarousel
          filter={previous === -22 ? "grayscale(100%)" : "none"}
          cursor={previous === -22 ? "null" : "pointer"}
          onClick={previousComent}
        >
          <img src="./src/assets/icon-left.png" alt="icon-left" />
        </StyleButtonCarousel>
        <StyleButtonCarousel
          filter={previous === 22 * (feedback.length - 2) ? "grayscale(100%)" : "none"}
          cursor={previous === 22 * (feedback.length - 2) ? "null" : "pointer"}
          onClick={nextComent}
        >
          <img src="./src/assets/icon-right.png" alt="icon-left" />
        </StyleButtonCarousel>
      </ContainerButtonCarousel>
    </StyleCardReview>
  );
};

export default CardReviewStyled;
