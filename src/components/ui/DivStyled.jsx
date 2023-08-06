import styled from "styled-components";

export const StyleDiv = styled.div`
  display: flex;
  flex-direction: ${({ $flexD }) => ($flexD === "row" ? "row" : "column")};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  margin: 2rem 0;

  @media only screen and (max-width: 960px) {
    align-items: center;
    margin-bottom: 1rem;
  }
`;

export const ContainerProffesionals = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
`;

export const StyleCardShop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-family: "PT Sans", sans-serif;
  background-color: var(--color-background);
  width: 18rem;
  height: 25rem;
  border: 3px solid var(--color-secondary);
  border-radius: 10px;
  transition: all 1s ease;

  &:hover {
    scale: 1.05;
  }
`;

export const StyleShopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 1rem 0;
`;

export const StyleInfoFirstPet = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: auto;
  margin: 2rem 0;

  @media only screen and (max-width: 624px) {
    width: 95%;
  }
`;

export const CarouselContainer = styled.div`
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
