import { useState } from "react";

import Navbar from "../components/Navbar";
import WeatherCard from "../components/WeatherCard";
import WeatherDetails from "../components/WeatherDetails";
import AirQualityCard from "../components/AirQualityCard";
import HourlyCharts from "../components/HourlyCharts";
import TemperatureToggle from "../components/TemperatureToggle";
import DatePicker from "../components/DatePicker";
import Loader from "../components/Loader";

import DashboardLayout from "../components/layout/DashboardLayout";

import { useWeatherContext } from "../context/WeatherContext";

const CurrentWeather = () => {
  const { weatherData, airData, loading, error } = useWeatherContext();
  
  // State for temperature unit
  const [unit, setUnit] = useState("C");
  
  // State for selected date
  const [date, setDate] = useState("");

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  // Helper to convert Celsius to Fahrenheit if needed
  const formatTemperature = (tempC) => {
    if (unit === "C") return tempC;
    return (tempC * 9) / 5 + 32;
  };

  return (
    <DashboardLayout>
      <div className="container">
        {/* Top Controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <DatePicker value={date} onChange={setDate} />
          <TemperatureToggle
            unit={unit}
            onToggle={() => setUnit(unit === "C" ? "F" : "C")}
          />
        </div>

        {/* Basic Cards */}
        <div className="grid">
          <WeatherCard
            title="Temp (Current)"
            value={formatTemperature(weatherData?.current_weather?.temperature)}
            unit={`°${unit}`}
          />
          <WeatherCard
            title="Max Temp"
            value={formatTemperature(weatherData?.daily?.temperature_2m_max?.[0])}
            unit={`°${unit}`}
          />
          <WeatherCard
            title="Min Temp"
            value={formatTemperature(weatherData?.daily?.temperature_2m_min?.[0])}
            unit={`°${unit}`}
          />
        </div>

        {/* Details Section */}
        <WeatherDetails data={weatherData} unit={unit} date={date} />

        {/* Air Quality */}
        <AirQualityCard data={airData} />

        {/* Charts */}
        <HourlyCharts data={weatherData} unit={unit} date={date} />
      </div>
    </DashboardLayout>
  );
};

export default CurrentWeather;