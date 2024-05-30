import axios from "axios";

export default async function loginAction(baseUrl, formData) {
  try {
    const response = await axios.post(`${baseUrl}/login`, formData, {
      withCredentials: true,
    });

    const { userId, accessToken } = response.data;

    sessionStorage.setItem("accessToken", accessToken);

    return { userId };
  } catch (error) {
    const { data: errorData } = error.response.data;

    return { errorData };
  }
}
