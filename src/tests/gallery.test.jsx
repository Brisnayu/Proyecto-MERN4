/* eslint-disable no-undef */
/**
 * @vitest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";

import Gallery from "../pages/Gallery";

describe("Gallery", () => {
  test("Gallery should have an title nested elements", () => {
    render(<Gallery />);

    expect(screen.getByText("Galería de mascotas!")).toBeInTheDocument();
    expect(screen.getByText("Fotos de mascotas felices")).toBeInTheDocument();
    expect(screen.getByText("100% adopted 100% real pets.")).toBeInTheDocument();
  });

  test("Image of gallery should have the correct alt", () => {
    render(<Gallery />);

    expect(screen.getByAltText("image-cat-and-dog")).toBeInTheDocument();
  });
});
