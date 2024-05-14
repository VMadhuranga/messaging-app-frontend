import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import renderWithRouter from "../../../tests/utils/render-with-router";

describe("App", () => {
  it("it should render successfully in / (root) route", () => {
    renderWithRouter();

    expect(screen.getByText("Messaging app")).toBeInTheDocument();
    expect(location.pathname).toBe("/");
  });

  it("should not render Friends link", () => {
    renderWithRouter();

    expect(screen.queryByText("Friends")).not.toBeInTheDocument();
    expect(location.pathname).toBe("/");
  });

  it("should not render Profile settings link", () => {
    renderWithRouter();

    expect(screen.queryByText("Profile settings")).not.toBeInTheDocument();
    expect(location.pathname).toBe("/");
  });

  it("should go to the /login route if Login link clicked", async () => {
    const { user } = renderWithRouter();
    expect(location.pathname).toBe("/");

    await user.click(screen.getByText("Login"));
    expect(location.pathname).toBe("/login");
  });

  it("should go to the /signup route if Signup link clicked", async () => {
    const { user } = renderWithRouter();
    expect(location.pathname).toBe("/");

    await user.click(screen.getByText("Signup"));
    expect(location.pathname).toBe("/signup");
  });
});
