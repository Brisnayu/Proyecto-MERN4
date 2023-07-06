/* eslint-disable no-undef */
/**
 * @vitest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";

import { InformationRrss } from "../functions/InformationRrss";
import Footer from "./Footer";

describe("Footer", () => {
  test("Should be render the correct image social networks", () => {
    render(<Footer />);

    InformationRrss.forEach((logo) => {
      expect(screen.getByAltText(logo.alt)).toBeVisible();
    });
  });

  test("Should be render the correct subtitle", () => {
    render(<Footer />);

    expect(screen.getByText("Patitas.com")).toBeInTheDocument();
  });

  test("Should be rendering the correct information of creator", () => {
    render(<Footer />);

    expect(
      screen.getByText("Creado con amor 💕 por Brisna Páez para Rock{TheCode}."),
    ).toBeInTheDocument();
  });
});
