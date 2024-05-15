import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import renderWithRouter from "../../../tests/utils/render-with-router";

describe("App", () => {
  it("it should render successfully in / (root) route", () => {
    renderWithRouter();

    expect(screen.getByText("Messaging app")).toBeInTheDocument();
    expect(location.pathname).toBe("/");
  });

  it("should not render navigation bar", async () => {
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

  it("should go to the /login route if Log in link clicked", async () => {
    const { user } = renderWithRouter();
    expect(location.pathname).toBe("/");

    await user.click(screen.getByRole("link", { name: "Log in" }));
    expect(location.pathname).toBe("/login");
  });

  it("should go to the /signup route if Sign up link clicked", async () => {
    const { user } = renderWithRouter();
    expect(location.pathname).toBe("/");

    await user.click(screen.getByRole("link", { name: "Sign up" }));
    expect(location.pathname).toBe("/signup");
  });
});
