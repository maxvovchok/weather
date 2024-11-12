import axios from "axios";
import { API_KEY, BASE_URL } from "./api";

export async function fetchCitySuggestions(query) {
  try {
    const res = await axios.get(`${BASE_URL}/find`, {
      params: {
        q: query,
        type: "like",
        appid: API_KEY,
      },
    });

    // console.log(res.data.list);

    //   return res.data

    return res.data.list.map((city) => ({
      name: city.name,
      country: city.sys.country,
      fullName: `${city.name}, ${city.sys.country}`,
      city,
    }));
  } catch (error) {
    console.error("Error getting city hints:", error);
    return [];
  }
}
