import axios from "axios";
import { API_KEY, BASE_URL } from "./api";

export async function fetchCitySuggestions(query) {
  try {
    const response = await axios.get(`${BASE_URL}/find`, {
      params: {
        q: query,
        type: "like",
        appid: API_KEY,
      },
    });

    console.log(response.data.list);

    return response.data.list.map((city) => ({
      name: city.name,
      country: city.sys.country,
      fullName: `${city.name}, ${city.sys.country}`,
    }));
  } catch (error) {
    console.error("Error getting city hints:", error);
    return [];
  }
}
