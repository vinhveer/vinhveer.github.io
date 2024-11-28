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

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <i className="fas fa-spinner fa-spin fa-3x"></i>
        <p className="ms-3">Đang tải dữ liệu thời tiết...</p>
      </div>
    );

  if (error)
    return (
      <div className="alert alert-danger" role="alert">
        <i className="fas fa-exclamation-triangle"></i> Lỗi: {error.message}
      </div>
    );

  return (
    <div className="container mt-4">
      <h3 className='mb-4'>Thời tiết tại vị trí của bạn</h3>

      {locationName && (
        <div>
          <h4>
            <i className="fas fa-map-marker-alt me-3"></i>Vị trí hiện tại:
          </h4>
          <p>{locationName}</p>
        </div>
      )}

      {weather && (
        <div className="my-4">
          <h4>
            <i className="fas fa-cloud-sun me-2"></i>Thời tiết hiện tại - {weather.temperature}°C
          </h4>
        </div>
      )}
    </div>
  );
};

export default Home;
