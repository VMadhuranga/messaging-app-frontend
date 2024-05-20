import { redirect } from "react-router-dom";
import App from "./components/app/App";
import SignUpPage from "./components/sign-up-page/SignUpPage";
import LoginPage from "./components/login-page/LoginPage";
import signUpAction from "./actions/sign-up-action";
import loginAction from "./actions/login-action";

const baseUrl = import.meta.env.VITE_BACKEND_URL;
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
        action: async ({ request }) => {
          const formData = Object.fromEntries(
            (await request.formData()).entries(),
          );

          const { userId, errorData } = await loginAction(baseUrl, formData);

          if (errorData) {
            return errorData;
          }

          return redirect(`/${userId}/friends`);
        },
      },
      {
        path: "/signup",
        element: <SignUpPage />,
        action: async ({ request }) => {
          const formData = Object.fromEntries(
            (await request.formData()).entries(),
          );

          const errorData = await signUpAction(baseUrl, formData);

          if (errorData) {
            return errorData;
          }

          return redirect("/login");
        },
      },
      {
        path: "/:user_id/friends",
        element: <p>Friends</p>,
      },
    ],
  },
];

export default routes;
