import axios from "axios";

export default async function userLoader(baseUrl, userId) {
  const accessToken = sessionStorage.getItem("accessToken");

  const response = await axios.get(`${baseUrl}/users/${userId}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  const { user } = response.data;

  return user;
}
