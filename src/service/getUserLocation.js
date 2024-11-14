import axios from "axios";
import { API_KEY_IPINFO } from "./api";

export async function getUserLocation() {
  try {
    const response = await axios.get(
      `https://ipinfo.io?token=${API_KEY_IPINFO}`
    ); 
    const { city, loc } = response.data;
    const [lat, lon] = loc.split(","); 

    return { city, lat, lon };
  } catch (error) {
    console.error("Error fetching user location", error);
    return null;
  }
}
