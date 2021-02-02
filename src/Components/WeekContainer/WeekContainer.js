import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

const WeekContainer = () => {
  const places = ["Kiev", "Kharkov", "Lviv"];
  const [activeCity, setActiveCity] = useState(0)

  const [days, setDays] = useState([]);

  useEffect(() => {
    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${places[activeCity]}&lang=ru&units=metric&APPID=580a8c9e5bc2c6096ac1483f52666388`;
    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        const dailyData = data.list.filter((reading) =>
          reading.dt_txt.includes("18:00:00")
        );
        setDays(dailyData);
      });
  });

  const formatCards = () => {
    return days.map((day, index) => <Card day={day} key={index} />);
  };
  return (
    <div className="weekContainer">
        {places.map((city, index) =>{
        return(
          <button 
          key={index}
          onClick={() => {
            setActiveCity(index)
          }}
          >
          {city}
          </button>
        );
      })}
      
      <h1 className="display-4 jumbotron">Прогноз погоды на 5 дней</h1>
      <h5 className="display-4 text-muted">{places[activeCity]}</h5>
      <div className="row justify-content-center">{formatCards()}</div>
    </div>
  );
};

export default WeekContainer;


