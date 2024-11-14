import axios from "axios";
import { API_KEY_IPINFO } from "./api";

export async function getUserLocation() {
  try {
    const response = await axios.get(
      `https://ipinfo.io?token=${API_KEY_IPINFO}`
    );

    const data = response.data;
    const arrCoordinates = data.loc.split(",");
    const coordinates = {
      lat: arrCoordinates[0],
      lon: arrCoordinates[1],
      city: data.city,
    };
    return coordinates;
  } catch (error) {
    console.error("Error fetching user location", error);
    return null;
  }
}
