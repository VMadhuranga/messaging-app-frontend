import axios from "axios";

export default async function logoutLoader(baseUrl) {
  const accessToken = sessionStorage.getItem("accessToken");

  await axios.get(`${baseUrl}/logout`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  sessionStorage.removeItem("accessToken");
}
