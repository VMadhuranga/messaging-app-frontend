import axios from "axios";

export default async function deleteFriendAction(baseUrl, userId, friendId) {
  const accessToken = sessionStorage.getItem("accessToken");
  await axios.delete(`${baseUrl}/users/${userId}/friends/${friendId}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });
}
