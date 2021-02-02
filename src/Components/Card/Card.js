import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const ms = props.day.dt * 1000;
  const weekdayName = new Date(ms).toLocaleString("en", { weekday: "long" });

  const imgURL = "owf owf-" + props.day.weather[0].id + " owf-5x icon-style";

  return (
    <div className={classes.card}>
      <div className="card bg-light">
        <h3 className="card-title">{weekdayName}</h3>
        <i className={imgURL}></i>
        <h2>{Math.round(props.day.main.temp)} °C</h2>
        <div className="card-body">
          <button className={classes.weatherInfo}>
            {props.day.weather[0].description}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
