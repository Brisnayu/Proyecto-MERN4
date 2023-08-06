/* eslint-disable no-undef */
/**
 * @vitest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";

import Reviews from "../pages/Reviews";

describe("Reviews", () => {
  test("Reviews should have an title nested elements", () => {
    render(<Reviews />);

    expect(screen.getByText("Reviews!")).toBeInTheDocument();
    expect(screen.getByText("What Our Clients Say About Us")).toBeInTheDocument();
    expect(
      screen.getByText("100% real feedback from 100% real customers."),
    ).toBeInTheDocument();
  });

  test("Image of reviews should have the correct alt", () => {
    render(<Reviews />);

    expect(screen.getByAltText("image-cat-and-dog")).toBeInTheDocument();
  });
});
