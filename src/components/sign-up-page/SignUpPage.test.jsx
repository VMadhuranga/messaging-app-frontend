import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import renderWithRouter from "../../../tests/utils/render-with-router";

describe("SignUpPage", () => {
  it("should render successfully in /signup route", () => {
    renderWithRouter("/signup");

    expect(
      screen.getByRole("heading", { name: "Sign up" }),
    ).toBeInTheDocument();
    expect(location.pathname).toBe("/signup");
  });

  it("should not render navigation bar", () => {
    renderWithRouter("/signup");

    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();

    expect(
      screen.queryByRole("link", { name: "Friends" }),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole("link", { name: "Profile settings" }),
    ).not.toBeInTheDocument();

    expect(location.pathname).toBe("/signup");
  });

  it("should go to /login route if Login link clicked", async () => {
    const { user } = renderWithRouter("/signup");
    expect(location.pathname).toBe("/signup");

    await user.click(screen.getByRole("link", { name: "Log in" }));
    expect(location.pathname).toBe("/login");
  });
});
