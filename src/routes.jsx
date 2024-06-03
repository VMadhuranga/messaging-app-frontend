import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./components/app/App";
import ErrorPage from "./components/error-page/ErrorPage";
import SignUpPage from "./components/sign-up-page/SignUpPage";
import LoginPage from "./components/login-page/LoginPage";
import signUpAction from "./actions/sign-up-action";
import loginAction from "./actions/login-action";
import FriendListPage from "./components/friend-list-page/FriendListPage";
import ChatPage from "./components/chat-page/ChatPage";
import friendListLoader from "./loaders/friend-list-loader";
import refreshAction from "./actions/refresh-action";
import messagesLoader from "./loaders/messages-loader";

const baseUrl = import.meta.env.VITE_BACKEND_URL;
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
        element: <FriendListPage />,
        loader: async ({ params }) => {
          await refreshAction(baseUrl);
          const friends = await friendListLoader(baseUrl, params.user_id);

          return friends;
        },
      },
      {
        path: "/:user_id/friends/:friend_id/messages",
        element: <ChatPage />,
        loader: async ({ params }) => {
          await refreshAction(baseUrl);
          const messages = await messagesLoader(
            baseUrl,
            params.user_id,
            params.friend_id,
          );

          return messages;
        },
      },
      {
        path: "/:user_id/people",
        element: <h2>Browse people page</h2>,
      },
    ],
  },
]);

export default routes;
