import { describe, expect, it } from "vitest";
import renderWithRouter from "../../../tests/utils/render-with-router";
import { screen } from "@testing-library/react";

describe("SignUpForm", () => {
  it("should render successfully in /signup route", () => {
    renderWithRouter("/signup");

    expect(screen.getByTestId("sign_up_form")).toBeInTheDocument();
    expect(location.pathname).toBe("/signup");
  });
});
