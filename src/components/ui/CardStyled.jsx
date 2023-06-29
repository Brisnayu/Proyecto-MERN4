import styled from "@emotion/styled";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Feedback } from "../../functions/Feedback";
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
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  /* white-space: nowrap; */
  border-radius: 15px;
  padding-left: 15px;
  height: 600px;
  width: 66rem;
  border: 2px solid yellow;
  position: absolute;
`;

const StyleButtonCarousel = styled.div`
  position: absolute;
  display: flex;
  gap: 1rem;
  bottom: -22rem;
  border: 3px solid blue;
`;

const CardReviewStyled = () => {
  const [previous, setPrevius] = useState(-21);
  const [positionCurrent, setPositionCurrent] = useState(0);

  const previousComent = () => {
    if (previous === -21) {
      setPrevius(-21);
    } else {
      setPrevius(previous - 21);
      setPositionCurrent(positionCurrent - 1);
    }
  };

  const nextComent = () => {
    setPrevius(previous + 21);
    setPositionCurrent(positionCurrent + 1);
  };

  console.log(previous);

  return (
    <StyleCardReview>
      <StyleCarousel>
        {Feedback.map((feed, index) => (
          <CardFeed
            key={uuidv4()}
            avatar={feed.avatar}
            nombre={feed.nombre}
            stars={feed.stars}
            texto={feed.texto}
            position={previous}
            height={index === positionCurrent ? "500px" : "300px"}
          />
        ))}
      </StyleCarousel>

      <StyleButtonCarousel>
        <button onClick={previousComent}>PREVIOUS</button>
        <button onClick={nextComent}>NEXT</button>
      </StyleButtonCarousel>
    </StyleCardReview>
  );
};

export default CardReviewStyled;
