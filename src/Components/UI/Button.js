import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <>
      <button
        className={classes.buttonCity}
        key={props.key}
        onClick={props.onClick}
      >
        {props.buttonName}
      </button>
    </>
  );
};

export default Button;
