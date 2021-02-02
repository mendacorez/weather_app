import React, { useState, useEffect } from "react";

const WeatherDisplay = (props) => {
//   this.state = {
//     weatherData: null,
//   };

  const [weatherData, setWeatherData] = useState(null)
  
  useEffect(() => {
    const name = props.name;
    const URL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      name +
      "&lang=ru&units=metric&appid=b1b35bba8b434a28a0be2a3e1071ae5b";
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setWeatherData(json);
      });  
  })
    // const weatherData = this.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    
    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
        <p>Current: {weatherData.main.temp}°С</p>
        <p>High: {weatherData.main.temp_max}°С</p>
        <p>Low: {weatherData.main.temp_min}°С</p>
        <p>Wind Speed: {weatherData.wind.speed} м/с</p>
      </div>
    );
}

export default WeatherDisplay;
