import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const AirQualityChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h3>Air Quality (PM10 & PM2.5)</h3>
      <ResponsiveContainer height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pm10" />
          <Line type="monotone" dataKey="pm2_5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AirQualityChart;