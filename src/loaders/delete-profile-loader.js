import axios from "axios";

export default async function deleteProfileLoader(baseUrl, userId) {
  const accessToken = sessionStorage.getItem("accessToken");

  await axios.delete(`${baseUrl}/users/${userId}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });
}
