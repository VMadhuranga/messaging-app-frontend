import axios from "axios";

export default async function peopleLoader(baseUrl, userId) {
  const accessToken = sessionStorage.getItem("accessToken");

  const response = await axios.get(`${baseUrl}/users/${userId}/people`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return response.data.people;
}
