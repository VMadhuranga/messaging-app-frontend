import axios from "axios";
import { decodeJwt } from "jose";

export default async function refreshAction(baseUrl) {
  try {
    const token = sessionStorage.getItem("accessToken");

    if (!token || decodeJwt(token).exp < Date.now()) {
      const response = await axios.get(`${baseUrl}/refresh`, {
        withCredentials: true,
      });

      const { accessToken, userId } = response.data;

      sessionStorage.setItem("accessToken", accessToken);

      return userId;
    }
  } catch (error) {
    return null;
  }
}
