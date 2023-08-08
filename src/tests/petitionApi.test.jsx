/* eslint-disable no-undef */
/**
 * @vitest-environment jsdom
 */

import axios from "axios";
import { describe, expect, test, vi } from "vitest";

import { fetchCat, fetchDog } from "../functions/PetitionApi";

vi.mock("axios");

describe("Petition Image Cat and Dog", () => {
  test("make a GET request to fetch petition cat and dog", async () => {
    const petitionMock = [
      {
        id: "mock1",
        url: "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1688378493/Hera%2C%20proyectos/IMG-20201022-WA0014_vglcsd.jpg",
        width: 575,
        height: 860,
      },
      {
        id: "mock2",
        url: "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1688378309/Hera%2C%20proyectos/IMG-20201022-WA0026_msudvm.jpg",
        width: 600,
        height: 461,
      },
    ];

    axios.get.mockResolvedValue({
      data: petitionMock,
    });

    const petitionCat = await fetchCat();

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.thecatapi.com/v1/images/search?limit=10",
    );
    expect(petitionCat).toStrictEqual(petitionMock);

    const petitionDog = await fetchDog();

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.thedogapi.com/v1/images/search?limit=10",
    );
    expect(petitionDog).toStrictEqual(petitionMock);
  });
});
