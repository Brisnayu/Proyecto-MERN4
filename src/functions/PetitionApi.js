import axios from "axios";

export const PetitionCatAndDog = (setArrayCat, setArrayDog) => {
  axios
    .get("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((res) => setArrayCat(res.data));
  axios
    .get("https://api.thedogapi.com/v1/images/search?limit=10")
    .then((res) => setArrayDog(res.data));
};

export const fetchCat = async () => {
  return (await axios.get("https://api.thecatapi.com/v1/images/search?limit=10")).data;
};

export const fetchDog = async () => {
  return (await axios.get("https://api.thedogapi.com/v1/images/search?limit=10")).data;
};
