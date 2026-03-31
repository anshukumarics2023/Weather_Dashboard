# Weather Dashboard

**Role:** Junior ReactJS Frontend Developer  
**Project:** Weather Dashboard using Open-Meteo API  

---

## Project Overview

This is a **responsive weather web application** built with **ReactJS**.  
It uses the **Open-Meteo API** ([https://open-meteo.com](https://open-meteo.com)) to show **real-time and historical weather data**.  
The app automatically detects the user’s location via browser GPS to display **localized weather information**.

The application is **mobile-friendly** and optimized for fast performance.

---

## Features

### Current Weather & Hourly Forecast
- Displays **temperature** (min, max, current)
- **Atmospheric conditions**: Precipitation, Relative Humidity, UV Index
- **Sun cycle**: Sunrise and Sunset
- **Wind & Air**: Max Wind Speed, Precipitation Probability
- **Air Quality Metrics**: AQI, PM10, PM2.5, CO, CO2, NO2, SO2
- **Hourly visualizations** for:
  - Temperature (Celsius/Fahrenheit toggle)
  - Humidity
  - Precipitation
  - Visibility
  - Wind Speed
  - PM10 & PM2.5 combined graph

### Historical Weather Analysis
- Select **date range** (up to 2 years)
- View trends for:
  - Temperature (mean, min, max)
  - Sun cycle (sunrise & sunset in IST)
  - Precipitation totals
  - Max wind speed & dominant wind direction
  - PM10 & PM2.5 trends
- Interactive **charts** with zoom and horizontal scroll
- Fully **mobile responsive**

---

## Technical Stack

- **Frontend:** ReactJS  
- **API:** Open-Meteo API  
- **Location Detection:** Browser GPS  
- **Charts/Visualization:** Your choice of React chart library (e.g., Chart.js, Recharts)  
- **Performance:** Optimized to load data quickly (<500ms)

---

## Installation & Running Locally

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/Weather_Dashboard.git
