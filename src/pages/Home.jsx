import React, { useEffect, useState } from 'react';

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Lấy vị trí của người dùng
        const { coords } = await new Promise((resolve, reject) =>
          navigator.geolocation.getCurrentPosition(resolve, reject)
        );

        // Gọi API dự báo thời tiết
        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current_weather=true`
        );

        if (!weatherResponse.ok) {
          throw new Error('Network response was not ok');
        }

        const weatherData = await weatherResponse.json();
        console.log('Weather Data:', weatherData);

        // Gọi API geocoding để lấy tên vị trí
        const geocodingResponse = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`
        );

        if (!geocodingResponse.ok) {
          throw new Error('Network response was not ok');
        }

        const geocodingData = await geocodingResponse.json();
        console.log('Geocoding Data:', geocodingData);

        // Cập nhật state với dữ liệu từ các API
        setWeather(weatherData.current_weather);
        setLocationName(geocodingData.display_name);
        setLoading(false);
      } catch (err) {
        console.error('Error:', err);
        setError(err);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p>Loading weather data...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="container-fluid">
        <h3>Nguyen Quang Vinh</h3>
        <p>Welcome to my website!</p>
        {locationName && (
          <div>
            <h4>Location:</h4>
            <p>{locationName}</p>
          </div>
        )}
        {weather && (
          <div>
            <h4>Current Weather:</h4>
            <p>Temperature: {weather.temperature}°C</p>
            <p>Weather: {weather.weathercode}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
