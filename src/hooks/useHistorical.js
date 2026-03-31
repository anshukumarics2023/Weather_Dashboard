import { useEffect, useState } from "react";
import { fetchHistoricalData } from "../services/historicalApi";

const useHistorical = (lat, lon, startDate, endDate) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!lat || !lon || !startDate || !endDate) return;

    const getHistorical = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetchHistoricalData(
          lat,
          lon,
          startDate,
          endDate
        );

        // 👉 Data ko chart-friendly format me convert
        const formatted = res?.daily?.time.map((date, index) => ({
          date,
          temp_max: res.daily.temperature_2m_max[index],
          temp_min: res.daily.temperature_2m_min[index],
          precipitation: res.daily.precipitation_sum[index],
          wind_speed: res.daily.windspeed_10m_max[index],
        }));

        setData(formatted);
      } catch (err) {
        setError("Failed to fetch historical data");
      } finally {
        setLoading(false);
      }
    };

    getHistorical();
  }, [lat, lon, startDate, endDate]);

  return { data, loading, error };
};

export default useHistorical;