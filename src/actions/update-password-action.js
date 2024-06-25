import axios from "axios";

export default async function updatePasswordAction(baseUrl, userId, formData) {
  try {
    const accessToken = sessionStorage.getItem("accessToken");

    await axios.patch(`${baseUrl}/users/${userId}/password`, formData, {
      headers: { Authorization: `Bearer ${accessToken}` },
      withCredentials: true,
    });
  } catch (error) {
    const { data: errorData } = error.response.data;
    return errorData;
  }
}
