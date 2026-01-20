import { useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiHumidity,
  WiStrongWind,
  WiThermometer,
} from "react-icons/wi";
import { IoSearch, IoLocationSharp } from "react-icons/io5";
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "2e7ef64dac2ffeb26a1a8f9528fdfe66";

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");

    try {
      const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
      const currentRes = await axios.get(currentUrl);
      setWeatherData(currentRes.data);
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
      const forecastRes = await axios.get(forecastUrl);
      const dailyData = forecastRes.data.list.filter((_reading, index) => index % 8 === 0);

      setForecastData(dailyData);
      setCity("");
    } catch (err) {
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderIcon = (main, size = 50) => {
    switch (main.toLowerCase()) {
      case "clear":
        return <WiDaySunny size={size} color="#FFD700" />;
      case "clouds":
        return <WiCloud size={size} color="#ffffff" />;
      case "rain":
        return <WiRain size={size} color="#4FACFE" />;
      case "snow":
        return <WiSnow size={size} color="#fff" />;
      default:
        return <WiDaySunny size={size} />;
    }
  };

  return (
    <div className="app-container">
      <div className="dashboard">
        <div className="current-panel">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search City..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && fetchWeather()}
            />
            <button onClick={fetchWeather}>
              <IoSearch />
            </button>
          </div>

          {error && <div className="error-msg">{error}</div>}

          {weatherData ? (
            <div className="current-info">
              <div className="header">
                <h2>
                  <IoLocationSharp /> {weatherData.name},{" "}
                  {weatherData.sys.country}
                </h2>
                <p>{format(new Date(), "EEEE, d MMMM")}</p>
              </div>

              <div className="hero-temp">
                {renderIcon(weatherData.weather[0].main, 120)}
                <h1>{Math.round(weatherData.main.temp)}°</h1>
                <span>{weatherData.weather[0].description}</span>
              </div>

              <div className="grid-details">
                <div className="detail-card">
                  <WiHumidity size={28} />
                  <span>{weatherData.main.humidity}%</span>
                  <p>Humidity</p>
                </div>
                <div className="detail-card">
                  <WiStrongWind size={28} />
                  <span>{weatherData.wind.speed} m/s</span>
                  <p>Wind</p>
                </div>
                <div className="detail-card">
                  <WiThermometer size={28} />
                  <span>{Math.round(weatherData.main.feels_like)}°</span>
                  <p>Feels Like</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="start-msg">
              <h1>Weather Dash</h1>
              <p>Enter a city to get started</p>
            </div>
          )}
        </div>

        <div className="forecast-panel">
          <h3>Upcoming Forecast</h3>
          <div className="forecast-list">
            {forecastData.length > 0 ? (
              forecastData.map((day, index) => (
                <div key={index} className="forecast-card">
                  <p className="day-name">
                    {index === 0 ? "Today" : format(new Date(day.dt * 1000), "EEE")}
                  </p>
                  <div className="forecast-icon">
                    {renderIcon(day.weather[0].main, 35)}
                  </div>
                  <p className="forecast-temp">{Math.round(day.main.temp)}°</p>
                  <p className="forecast-desc">{day.weather[0].main}</p>
                </div>
              ))
            ) : (
              <div className="placeholder-text">
                Forecast data will appear here.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;