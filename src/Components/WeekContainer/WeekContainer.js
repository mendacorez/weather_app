import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Button from "../UI/Button";
import classes from "./WeekContainer.module.css";

const WeekContainer = () => {
  const places = ["Kiev", "Kharkov", "Lviv", "Dnepr", "Odessa"];
  const [activeCity, setActiveCity] = useState(0);

  const time = [
    "00:00:00",
    "03:00:00",
    "06:00:00",
    "09:00:00",
    "12:00:00",
    "15:00:00",
    "18:00:00",
    "21:00:00",
  ];
  const [activeTime, setActiveTime] = useState("12:00:00");

  const [days, setDays] = useState([]);

  // APIkey 1: a9a3a62789de80865407c0452e9d1c27
  // APIkey 2: 3b9cc166b201dac3dd6e15f2b94b75d8 (schapoval)
  // APIkey 3: 580a8c9e5bc2c6096ac1483f52666388 (nure)
  // *! If you see a "Cannot read property 'filter' of undefined" error, wait a bit. These are problems from the Weather API

  const APIkey = "580a8c9e5bc2c6096ac1483f52666388";
  const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${places[activeCity]}&lang=en&units=metric&APPID=${APIkey}`;

  useEffect(() => {
    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        const dailyData = data.list.filter((reading) =>
          reading.dt_txt.includes(activeTime)
        );
        setDays(dailyData);
      });
  });

  const formatCards = () => {
    return days.map((day, index) => <Card day={day} key={index} />);
  };

  const timeList = () => {
    return (
      <div style={{ display: "flex" }}>
        {time.map((hour, index) => {
          return (
            <Button
              key={index}
              onClick={() => {
                setActiveTime(hour);
              }}
              buttonName={hour.split("").splice(0, 5)}
            />
          );
        })}
      </div>
    );
  };

  const cityTable = () => {
    return places.map((city, index) => {
      return (
        <Button
          buttonName={city}
          key={index}
          onClick={() => {
            setActiveCity(index);
          }}
        />
      );
    });
  };

  return (
    <div className={classes.WeekContainer}>
      <header className={classes.header}>
        <span className={classes.title}>
          Weather forecast for the next 5 days
        </span>
      </header>
      <nav className={classes.nav}>
        <div class={classes.cities}>{cityTable()}</div>
        {timeList()}
      </nav>
      <span className={classes.cityName}>
        {places[activeCity]}, {activeTime.split("").splice(0, 5)}
      </span>
      <div className={classes.cards}>{formatCards()}</div>
    </div>
  );
};

export default WeekContainer;
