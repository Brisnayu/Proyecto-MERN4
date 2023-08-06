/* eslint-disable no-undef */
/**
 * @vitest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event/dist/types/setup";
import { describe, test } from "vitest";

import { categories } from "../functions/ShopProducts";
import Shop from "../pages/Shop";

describe("Shop", () => {
  test("Should be render the correct elements", () => {
    render(<Shop />);

    expect(screen.getByAltText("image-toys")).toBeInTheDocument();
  });

  test("Should be render the correct subtitle", () => {
    render(<Shop />);

    expect(screen.getByText("Lo mejor para tus mascotas")).toBeInTheDocument();
  });

  test("Should be render the correct cursive text", () => {
    render(<Shop />);
    expect(screen.getByText("Tienda!")).toBeInTheDocument();
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

  test("Componentes dentro del select", () => {
    render(<Shop categories={categories} />);
    let option$$ = screen.getByRole("option", { name: "todo" });
    expect(option$$).toBeInTheDocument();

    let select$$ = document.querySelector("#prueba1");
    expect(select$$).toBeInTheDocument();

    // Faltaría fingir que le estoy dando click al evento y estoy recorriendo las diferentes categorías de los productos

    // userEvent.type(click, select$$);

    // for (const category of categories) {
    //   expect(screen.getByText(category)).toBeInTheDocument();
    // }
  });
});
