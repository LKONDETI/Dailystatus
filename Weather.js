// // WeatherApp.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import moment from 'moment';
// import { Line } from 'react-chartjs-2';

// function WeatherApp(){
//   const [dailyWeather, setDailyWeather] = useState([]);
//   const [hourlyWeather, setHourlyWeather] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const apiKey = '310';
//       const baseUrl = 'https://developers.google.com/maps/documentation/geolocation/overview';

//       // Fetch weekly weather data
//       const weeklyResponse = await axios.get(`${baseUrl}/forecast.json?key=${apiKey}&days=7`);
//       setDailyWeather(weeklyResponse.data.forecast.forecastday);

//       // Fetch hourly weather data
//       const hourlyResponse = await axios.get(`${baseUrl}/forecast.json?key=${apiKey}&hours=24`);
//       setHourlyWeather(hourlyResponse.data.forecast.forecastday[0].hour);
//     };

//     fetchData();
//   }, []);

//   const dailyLabels = dailyWeather.map(day => moment(day.date).format('MMM D'));
//   const dailyTemps = dailyWeather.map(day => day.day.avgtemp_c);
  
//   const hourlyLabels = hourlyWeather.map(hour => moment(hour.time).format('HH:mm'));
//   const hourlyTemps = hourlyWeather.map(hour => hour.temp_c);

//   const dailyChartOptions = {
//     // Chart options here
//   };

//   const hourlyChartOptions = {
//     // Chart options here
//   };

//   return (
//     <div className="weather-app">
//       <h1>7-Day Weather Forecast</h1>
//       <Line data={{ labels: dailyLabels, datasets: [{ data: dailyTemps, label: 'Temperature (°C)' }] }} options={dailyChartOptions} />

//       <h2>Hourly Weather Forecast</h2>
//       <Line data={{ labels: hourlyLabels, datasets: [{ data: hourlyTemps, label: 'Temperature (°C)' }] }} options={hourlyChartOptions} />
//     </div>
//   );
// };

// export default WeatherApp;
