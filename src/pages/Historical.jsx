import { useState } from "react";

import Navbar from "../components/Navbar";
import DatePicker from "../components/DatePicker";
import Chart from "../components/Chart";
import Loader from "../components/Loader";

import DashboardLayout from "../components/layout/DashboardLayout";

import useHistorical from "../hooks/useHistorical";

const Historical = () => {
  const { data, loading, error } = useHistorical();

  // State to store selected date or date range
  const [date, setDate] = useState("");

  if (loading) return <Loader />;
  if (error) return <p>Error loading data</p>;

  // Filter data based on selected date (optional)
  const filteredData = date
    ? data.filter((item) => item.date === date)
    : data;

  return (
    <DashboardLayout>
      <div className="container">
        <h2 style={{ marginTop: "20px" }}>Historical Insights 📊</h2>

        {/* Date Range Picker */}
        <div style={{ margin: "20px 0" }}>
          <DatePicker value={date} onChange={setDate} />
        </div>

        {/* Charts Section */}
        <div className="chart-container" style={{ marginBottom: "30px" }}>
          <Chart data={filteredData} dataKey="temp_max" />
        </div>

        <div className="chart-container" style={{ marginBottom: "30px" }}>
          <Chart data={filteredData} dataKey="precipitation" />
        </div>

        <div className="chart-container" style={{ marginBottom: "30px" }}>
          <Chart data={filteredData} dataKey="wind_speed" />
        </div>

        <div className="chart-container" style={{ marginBottom: "30px" }}>
          <Chart data={filteredData} dataKey="pm10" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Historical;