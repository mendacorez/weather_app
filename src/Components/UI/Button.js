import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  return(
      <nav>
         <button 
      className={classes.buttonCity}
      key = {props.key}
      onClick = {props.onClick}
      >
          {props.buttonName}
      </button> 
      </nav>
      
  );  
} 

export default Button;