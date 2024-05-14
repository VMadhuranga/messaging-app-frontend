import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider } from "react-router-dom";
import router from "../../src/router";

const renderWithRouter = (route = "/") => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(<RouterProvider router={router} />),
  };
};

export default renderWithRouter;
