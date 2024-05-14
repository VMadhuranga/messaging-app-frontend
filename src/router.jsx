import { createBrowserRouter } from "react-router-dom";
import App from "./components/app/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <p>Login page</p>,
      },
      {
        path: "/signup",
        element: <p>Signup page</p>,
      },
    ],
  },
]);

export default router;
