import { beforeEach, describe, expect, it } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import renderWithRouter from "../../../tests/utils/render-with-router";

describe("LoginForm", () => {
  let usr;
  let userNameInput;
  let passwordInput;
  let loginButton;

  beforeEach(async () => {
    const { user } = renderWithRouter("/login");
    usr = user;

    userNameInput = screen.getByTestId("username");
    passwordInput = screen.getByTestId("password");
    loginButton = screen.getByRole("button", { name: "Log in" });
  });

  it("should render successfully in /login route", async () => {
    expect(screen.getByTestId("login_form")).toBeInTheDocument();
    expect(location.pathname).toBe("/login");
  });

  it("should go to /:user_id/friends route if log in successful", async () => {
    expect(location.pathname).toBe("/login");

    // log in user
    await usr.type(userNameInput, "jd");
    await usr.type(passwordInput, "jd1234");
    await usr.click(loginButton);

    await waitFor(() => {
      expect(location.pathname).toMatch(/^\/[a-fA-F0-9]{24}\/friends$/);
    });
  });

  it("should display error message if username is incorrect", async () => {
    expect(location.pathname).toBe("/login");

    // log in user with incorrect username
    await usr.type(userNameInput, "john");
    await usr.type(passwordInput, "jd1234");
    await usr.click(loginButton);

    expect(await screen.findByText("Incorrect user name")).toBeInTheDocument();
  });

  it("should display error message if password is incorrect", async () => {
    expect(location.pathname).toBe("/login");

    // log in user with incorrect password
    await usr.type(userNameInput, "jd");
    await usr.type(passwordInput, "jd123");
    await usr.click(loginButton);

    expect(await screen.findByText("Incorrect password")).toBeInTheDocument();
    expect(location.pathname).toBe("/login");
  });
});
