import React, { useState } from "react";
import classes from "./App.module.css";
import WeatherDisplay from "./Components/WeatherDisplay/WeatherDisplay";

const App = () => {
  const places = ["Kharkiv", "Kiev", "Lviv", "London"];
  const [activeCity, setActiveCity] = useState(0);
  return (
    <div className={classes.App}>
      <header className={classes.appHeader}>
        {places.map((city, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setActiveCity(index);
              }}
            >
              {city}
            </button>
          );
        })}
      </header>

      <WeatherDisplay key={activeCity} name={places[activeCity]} />
    </div>
  );
};

export default App;
