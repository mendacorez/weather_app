import React, { Component } from "react";
import classes from "./App.module.css";
import WeekContainer from "./Components/WeekContainer/WeekContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeekContainer />
      </div>
    );
  }
}

export default App;
