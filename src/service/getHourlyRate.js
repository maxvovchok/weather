import axios from "axios";
import { API_KEY, BASE_URL } from "./api";

export async function getHourlyRate(query) {
  try {
    const res = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: query,
        appid: API_KEY,
      },
    });

    return res.data;
  } catch (error) {
    console.error("Error getting city hints:", error);
  }
}
