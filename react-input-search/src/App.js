import React, { Component } from "react";

import { Search } from './Search'
import "./App.css";

const cities = [
  "Baltimore",
  "Cleveland",
  "New Dehli",
  "Moscow",
  "Paris",
  "Dublin",
  "Detroit",
  "Naples",
  "Milan",
  "New York",
  "Chicago",
  "Hong Kong",
  "London",
  "Sydney",
  "Shanghai",
  "Toronto"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search cities={cities} />
      </div>

    ) 
  }
}

export default App;
