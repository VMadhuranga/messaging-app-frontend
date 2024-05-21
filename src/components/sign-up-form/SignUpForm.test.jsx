import { beforeEach, describe, expect, it } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import renderWithRouter from "../../../tests/utils/render-with-router";

describe("SignUpForm", () => {
  let usr;
  let firstNameInput;
  let lastNameInput;
  let userNameInput;
  let passwordInput;
  let confirmPasswordInput;
  let submitButton;

  beforeEach(async () => {
    const { user } = renderWithRouter("/signup");
    usr = user;

    firstNameInput = screen.getByTestId("first_name");
    lastNameInput = screen.getByTestId("last_name");
    userNameInput = screen.getByTestId("username");
    passwordInput = screen.getByTestId("password");
    confirmPasswordInput = screen.getByTestId("confirm_password");
    submitButton = screen.getByRole("button", {
      name: "Sign up",
    });
  });

  it("should render successfully in /signup route", () => {
    expect(location.pathname).toBe("/signup");
    expect(screen.getByTestId("sign_up_form")).toBeInTheDocument();
  });

  it("should go to /login route if sign up successful", async () => {
    expect(location.pathname).toBe("/signup");

    // creating user
    await usr.type(firstNameInput, "will");
    await usr.type(lastNameInput, "smith");
    await usr.type(userNameInput, "ws");
    await usr.type(passwordInput, "ws1234");
    await usr.type(confirmPasswordInput, "ws1234");
    await usr.click(submitButton);

    await waitFor(() => {
      expect(location.pathname).toBe("/login");
    });
  });

  it("should display error message if user name already exists", async () => {
    expect(location.pathname).toBe("/signup");

    // creating another user with same username
    await usr.type(firstNameInput, "jane");
    await usr.type(lastNameInput, "doe");
    await usr.type(userNameInput, "jd");
    await usr.type(passwordInput, "jd1234");
    await usr.type(confirmPasswordInput, "jd1234");
    await usr.click(submitButton);

    expect(
      await screen.findByText("User with this username already exist"),
    ).toBeInTheDocument();
  });

  it("should display error message if password not only contain letters and numbers", async () => {
    expect(location.pathname).toBe("/signup");

    // creating a user with password not only only contain letters and numbers
    await usr.type(firstNameInput, "dane");
    await usr.type(lastNameInput, "joe");
    await usr.type(userNameInput, "dj");
    await usr.type(passwordInput, "dj1234()");
    await usr.type(confirmPasswordInput, "dj1234()");
    await usr.click(submitButton);

    expect(
      await screen.findByText(
        "Passwords must contain only letters and numbers",
      ),
    ).toBeInTheDocument();
  });

  it("should display error message if passwords are not equal", async () => {
    expect(location.pathname).toBe("/signup");

    // creating a user with different passwords
    await usr.type(firstNameInput, "dane");
    await usr.type(lastNameInput, "joe");
    await usr.type(userNameInput, "dj");
    await usr.type(passwordInput, "dj1234");
    await usr.type(confirmPasswordInput, "dj123");
    await usr.click(submitButton);

    expect(
      await screen.findByText("Passwords do not match"),
    ).toBeInTheDocument();
  });
});
