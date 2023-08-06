/* eslint-disable no-undef */
/**
 * @vitest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";

import { IconFirstPet } from "../functions/InformationPets";
import FirstPet from "../pages/FirstPet";

describe("FirstPet", () => {
  test("Should be render the correct elements", () => {
    render(<FirstPet />);

    expect(screen.getByAltText("image-pets")).toBeInTheDocument();
    expect(screen.getByText("Sigue nuestros consejos")).toBeInTheDocument();
  });

  test("Should be render the correct alt image", () => {
    render(<FirstPet />);

    IconFirstPet.forEach((icon) => {
      expect(screen.getByAltText(icon.pet)).toBeInTheDocument();
    });
  });
});
