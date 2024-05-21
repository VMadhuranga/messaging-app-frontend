import axios from "axios";

export default async function dropTestDb() {
  await axios.get("http://localhost:3000/drop", {
    withCredentials: true,
  });
}
