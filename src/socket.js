import { io } from "socket.io-client";

const baseUrl = import.meta.env.VITE_BACKEND_URL;
const socket = io(baseUrl, { autoConnect: false, withCredentials: true });

export default socket;
