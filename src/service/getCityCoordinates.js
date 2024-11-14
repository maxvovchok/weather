import axios from "axios";
import { API_KEY, BASE_URL } from "./api";

export async function getCityCoordinates(lat, lon) {
  try {
    const res = await axios.get(`${BASE_URL}/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
      },
    });

    const city = {
      name: res.data.name,
      country: res.data.sys.country,
      fullName: `${res.data.name}, ${res.data.country}`,
      city: res.data,
    };

    return city;
  } catch (error) {
    console.error("Error getting city hints:", error);
    return [];
  }
}
