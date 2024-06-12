import axios from "axios";

export default async function addFriendAction(baseUrl, userId, formData) {
  const accessToken = sessionStorage.getItem("accessToken");

  await axios.post(`${baseUrl}/users/${userId}/friends`, formData, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });
}
