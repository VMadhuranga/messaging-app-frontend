import axios from "axios";

export default async function friendListLoader(baseUrl, userId) {
  const accessToken = sessionStorage.getItem("accessToken");

  const response = await axios.get(`${baseUrl}/users/${userId}/friends`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  const { friends } = response.data;

  return friends;
}
