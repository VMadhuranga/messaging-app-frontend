import App from "./components/app/App";
import SignUpPage from "./components/sign-up-page/SignUpPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <p>Login page</p>,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
];

export default routes;
