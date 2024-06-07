import axios from "axios";

export default async function sendMessageAction(
  baseUrl,
  userId,
  friendId,
  formData,
) {
  const accessToken = sessionStorage.getItem("accessToken");
  await axios.post(
    `${baseUrl}/users/${userId}/friends/${friendId}/messages`,
    formData,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
      withCredentials: true,
    },
  );
}
