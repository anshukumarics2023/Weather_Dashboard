import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const Chart = ({ data, dataKey, secondKey }) => {
  return (
    <div className="card" style={{ height: "300px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Primary Line */}
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
          />

          {/* Optional Second Line */}
          {secondKey && (
            <Line
              type="monotone"
              dataKey={secondKey}
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;