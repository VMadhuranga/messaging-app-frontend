import axios from "axios";

export default async function messagesLoader(baseUrl, userId, friendId) {
  const accessToken = sessionStorage.getItem("accessToken");

  const response = await axios.get(
    `${baseUrl}/users/${userId}/friends/${friendId}/messages`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
      withCredentials: true,
    },
  );

  return response.data.messages;
}
