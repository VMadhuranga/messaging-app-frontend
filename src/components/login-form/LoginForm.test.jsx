import { describe, expect, it } from "vitest";
import renderWithRouter from "../../../tests/utils/render-with-router";
import { screen } from "@testing-library/react";

describe("LoginForm", () => {
  it("should render successfully in /login route", () => {
    renderWithRouter("/login");

    expect(screen.getByTestId("login_form")).toBeInTheDocument();
    expect(location.pathname).toBe("/login");
  });
});
