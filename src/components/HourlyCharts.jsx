import Chart from "./Chart";
import { formatHourlyData } from "../utils/formatHourlyData";

const HourlyCharts = ({ data }) => {
  if (!data) return null;

  const formatted = formatHourlyData(data);

  //  PM10 + PM2.5 combined data
  const airQualityData = data.hourly.time.map((t, i) => ({
    time: new Date(t).getHours() + ":00",
    pm10: data.hourly.pm10?.[i],
    pm25: data.hourly.pm2_5?.[i],
  }));

  return (
    <div className="chart-container">

      {/* Wrapper for scroll */}
      <div style={{ overflowX: "auto" }}>

        <h3>Temperature</h3>
        <Chart data={formatted} dataKey="temperature" />

        <h3>Humidity</h3>
        <Chart data={formatted} dataKey="humidity" />

        <h3>Precipitation</h3>
        <Chart data={formatted} dataKey="precipitation" />

        <h3>Visibility</h3>
        <Chart data={formatted} dataKey="visibility" />

        <h3>Wind Speed</h3>
        <Chart data={formatted} dataKey="wind" />

        <h3>Air Quality (PM10 & PM2.5)</h3>
        <Chart data={airQualityData} dataKey="pm10" secondKey="pm25" />

      </div>
    </div>
  );
};

export default HourlyCharts;