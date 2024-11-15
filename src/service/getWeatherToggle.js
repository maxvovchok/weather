import axios from "axios";
import { API_KEY, BASE_URL } from "./api";

export async function getWeatherToggle(lat, lon) {
  try {
    const res = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        lat: lat,
        lon: lon,
        appid: API_KEY,
        units: "metric",
      },
    });

    console.log(res.data);

    return res.data;
  } catch (error) {
    console.error("Error getting weather data:", error);
  }
}
