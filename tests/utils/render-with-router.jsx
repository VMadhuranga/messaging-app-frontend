import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "../../src/routes";

const renderWithRouter = (route = "/") => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(<RouterProvider router={createBrowserRouter(routes)} />),
  };
};

export default renderWithRouter;
