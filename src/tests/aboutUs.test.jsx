/* eslint-disable no-undef */
/**
 * @vitest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";

import { ProfessionalsPets } from "../functions/ProfessionalsPets";
import AboutUs from "../pages/AboutUs";

describe("AboutUs", () => {
  test("Should be render the correct elements", () => {
    render(<AboutUs />);

    expect(screen.getByAltText("image-pets")).toBeInTheDocument();
  });

  test("Should be render the correct subtitle", () => {
    render(<AboutUs />);

    expect(screen.getByText("Conoce a nuestro equipo")).toBeInTheDocument();
  });

  test("Should be render the correct name of the professional", () => {
    render(<AboutUs />);

    ProfessionalsPets.forEach((name) => {
      expect(screen.getByText(name.profesional)).toBeInTheDocument();
    });
  });
});
