import { useEffect, useState } from 'react';
import axios from 'axios';

interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

const Weather = () => {
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Step 1: Get the IP address
        const ipRes = await axios.get('https://api.ipify.org?format=json');
        const ip = ipRes.data.ip;

        // Step 2: Get the coordinates based on IP
        const geoApiKey = import.meta.env.VITE_GEOAPIFY_API_KEY; // Replace with your Geoapify API key
        const geoRes = await axios.get(`https://api.geoapify.com/v1/ipinfo?ip=${ip}&apiKey=${geoApiKey}`);
        const { latitude, longitude } = geoRes.data.location;

        // Step 3: Get the weather forecast
        const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY; // Replace with your WeatherAPI.com API key
        const weatherRes = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${latitude},${longitude}&days=7`);
        setForecast(weatherRes.data.forecast.forecastday);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
        setError('Failed to load weather data.');
      }
    };

    fetchWeather();
  }, []);

  if (error) return <div className="box"><p>{error}</p></div>;
  
  return (
    <div className="weather-app">
      <div className="box"></div>
      <div className="cloud"></div>
      <div className="sun"></div>
      <h1>Weather Forecast</h1>
      <div className="forecast-container">
        {forecast.length > 0 ? (
          forecast.map((day, index) => (
            <div key={index} className="forecast-box">
              <h3>{day.date}</h3>
              <img src={day.day.condition.icon} alt="weather condition icon" />
              <p className="temperature">High: {day.day.maxtemp_c}°C</p>
              <p className="temperature">Low: {day.day.mintemp_c}°C</p>
              <p>{day.day.condition.text}</p>
            </div>
          ))
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
};

export default Weather;