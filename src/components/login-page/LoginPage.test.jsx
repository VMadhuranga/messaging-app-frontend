import { describe, expect, it } from "vitest";
import renderWithRouter from "../../../tests/utils/render-with-router";
import { screen } from "@testing-library/react";

describe("SignUpForm", () => {
  it("should render successfully in /login route", () => {
    renderWithRouter("/login");

    expect(screen.getByRole("heading", { name: "Log in" })).toBeInTheDocument();
    expect(location.pathname).toBe("/login");
  });

  it("should not render navigation bar", () => {
    renderWithRouter("/login");

    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();

    expect(
      screen.queryByRole("link", { name: "Friends" }),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole("link", { name: "Profile settings" }),
    ).not.toBeInTheDocument();

    expect(location.pathname).toBe("/login");
  });

  it("should go to /signup route if Sign up link clicked", async () => {
    const { user } = renderWithRouter("/login");
    expect(location.pathname).toBe("/login");

    await user.click(screen.getByRole("link", { name: "Sign up" }));
    expect(location.pathname).toBe("/signup");
  });
});
