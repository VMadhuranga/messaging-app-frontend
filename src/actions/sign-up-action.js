import axios from "axios";

export default async function signUpAction(baseUrl, formData) {
  try {
    await axios.post(`${baseUrl}/users`, formData, {
      withCredentials: true,
    });
  } catch (error) {
    const { data: errorData } = error.response.data;
    return errorData;
  }
}
