import React, { Component } from "react";
import WeekContainer from "./Components/WeekContainer/WeekContainer";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <WeekContainer />
      </div>
    );
  }
}
