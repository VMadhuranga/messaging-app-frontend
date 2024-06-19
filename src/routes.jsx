import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./components/app/App";
import ErrorPage from "./components/error-page/ErrorPage";
import SignUpPage from "./components/sign-up-page/SignUpPage";
import LoginPage from "./components/login-page/LoginPage";
import signUpAction from "./actions/sign-up-action";
import loginAction from "./actions/login-action";
import FriendListPage from "./components/friend-list-page/FriendListPage";
import ChatPage from "./components/chat-page/ChatPage";
import BrowsePeoplePage from "./components/browse-people-page/BrowsePeoplePage";
import friendListLoader from "./loaders/friend-list-loader";
import refreshAction from "./actions/refresh-action";
import messagesLoader from "./loaders/messages-loader";
import deleteFriendAction from "./actions/delete-friend-action";
import sendMessageAction from "./actions/send-message-action";
import peopleLoader from "./loaders/people-loader";
import addFriendAction from "./actions/add-friend-action";
import ProfilePage from "./components/profile-page/ProfilePage";
import logoutAction from "./loaders/logout-loader";
import deleteProfileLoader from "./loaders/delete-profile-loader";
import EditProfilePage from "./components/edit-profile-page/EditProfilePage";

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
        path: "/logout",
        loader: async () => {
          await logoutAction(baseUrl);
          return redirect("/login");
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
        path: "/:user_id/profile",
        element: <ProfilePage />,
      },
      {
        path: "/:user_id/profile/delete",
        loader: async ({ params }) => {
          await refreshAction(baseUrl);
          await deleteProfileLoader(baseUrl, params.user_id);
          return redirect("/");
        },
      },
      {
        path: "/:user_id/profile/edit",
        element: <EditProfilePage />,
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
        action: async ({ request, params }) => {
          await refreshAction(baseUrl);
          if (request.method === "DELETE") {
            await deleteFriendAction(baseUrl, params.user_id, params.friend_id);
            return redirect(`/${params.user_id}/friends`);
          }

          if (request.method === "POST") {
            const formData = Object.fromEntries(
              (await request.formData()).entries(),
            );

            await sendMessageAction(
              baseUrl,
              params.user_id,
              params.friend_id,
              formData,
            );

            return null;
          }
        },
      },
      {
        path: "/:user_id/people",
        element: <BrowsePeoplePage />,
        loader: async ({ params }) => {
          await refreshAction(baseUrl);
          const people = await peopleLoader(baseUrl, params.user_id);
          return people;
        },
        action: async ({ request, params }) => {
          await refreshAction(baseUrl);
          const formData = Object.fromEntries(
            (await request.formData()).entries(),
          );
          await addFriendAction(baseUrl, params.user_id, formData);
          return null;
        },
      },
    ],
  },
]);

export default routes;
