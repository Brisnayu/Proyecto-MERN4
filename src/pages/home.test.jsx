/* eslint-disable no-undef */
/**
 * @vitest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";

import Home from "./Home";

describe("Home", () => {
  test("Should be render the correct elements", () => {
    render(<Home />);

    expect(screen.getByAltText("image-pet")).toBeInTheDocument();
    expect(
      screen.getByText("¡Estamos felices de consentir a tus mascotas!"),
    ).toBeInTheDocument();
    expect(screen.getByText("Juguetes y Suministros")).toBeInTheDocument();
  });

  test("Should be render the correct alt image", () => {
    render(<Home />);

    expect(screen.getByRole("img")).toHaveAttribute("alt", "image-pet");
  });

  test("Should be render the correct button", () => {
    render(<Home />);

    expect(screen.getByRole("button")).toHaveTextContent("Click");
  });
});
