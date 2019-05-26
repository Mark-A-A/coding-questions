import React, { Fragment, useState, useEffect } from "react";

import "./Search.css"
// Use React hooks for extra credit!
export function Search({ cities }) {
  const [citiesToRender, setCities] = useState(cities)
  const [searchValue, setSearchText] = useState("")


  function handleSearchValueChange(e) {
    setSearchText(e.target.value)
  }

  function findCities(cityString) {
    const reducer = (acc, value) => {
      if (value.toLowerCase().includes(cityString)) {
        acc.push(value)
      }
      return acc
    }

    return cities.reduce(reducer, []).sort()
  }

  useEffect(() => {
    //Find cities
    if (searchValue) {
      const results = findCities(searchValue)
      setCities(results)
    } else {
      setCities(cities)
    }
  })

  return (
    <div id="search-section">
      <h1>Search Cities</h1>
      <form id="search-form">
        <input type="text" placeholder="Please type a city to find" value={searchValue} onChange={handleSearchValueChange}></input>
      </form>
      <ul className="App__list">
        {
          citiesToRender.length
            ? (
              citiesToRender.map((city, i) => {
                return <li key={`${city}_${i}`}> {city}</li>
              })
            )
            : "No Results found"
          
        }
      </ul>
    </div>

  )
}