import axios from "axios";
import { API_CONFIG } from "../constants/apiConfig";

export const fetchHistoricalData = async (lat, lon, start, end) => {
  try {
    const res = await axios.get(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.FORECAST}`,
      {
        params: {
          latitude: lat,
          longitude: lon,
          start_date: start,
          end_date: end,

          daily: [
            "temperature_2m_max",
            "temperature_2m_min",
            "temperature_2m_mean",
            "precipitation_sum",
            "windspeed_10m_max",
            "winddirection_10m_dominant",
            "sunrise",
            "sunset",
          ].join(","),

          timezone: "auto",
        },
      }
    );

    return res.data;
  } catch (error) {
    console.error("Historical API Error:", error);
    throw error;
  }
};