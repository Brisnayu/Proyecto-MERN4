/* eslint-disable no-undef */
/**
 * @vitest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";

import Shop from "./Shop";

describe("Shop", () => {
  test("Should be render the correct elements", () => {
    render(<Shop />);

    expect(screen.getByAltText("image-toys")).toBeInTheDocument();
  });

  test("Should be render the correct subtitle", () => {
    render(<Shop />);

    expect(screen.getByText("Lo mejor para tus mascotas")).toBeInTheDocument();
  });

  [
    "Pelota de juguete",
    "Comida para perros",
    "Paseo de 1 hora",
    "Juguete interactivo",
    "Comida para gatos",
    "Rascador para gatos",
    "Cepillo para perros",
    "Comedero automático",
    "Pelota de goma",
    "Snacks para perros",
  ].map((name) => {
    test("Should be render the correct alt image of the products", () => {
      render(<Shop />);

      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  // ["too", "juguetes", "comida", "serviio"].forEach((categoria) => {
  //   test("prueba select", () => {
  //     render(<Shop />);

  //     userEvent.type("Estas buscando" + "todo");

  //     waitFor(() =>
  //       expect(screen.queryByText("Estas buscando" + categoria)).toBeInTheDocument(),
  //     );
  //   });
  // });
});
