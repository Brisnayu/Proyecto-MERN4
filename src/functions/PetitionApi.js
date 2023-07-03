import axios from "axios";
import { useEffect } from "react";

export const PetitionCat = () => {
  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((res) => console.log(res));
  }, []);
};
