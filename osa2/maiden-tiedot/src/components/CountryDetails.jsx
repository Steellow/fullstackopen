import React, { useEffect, useState } from "react";
import axios from "axios";

const CountryDetails = ({ country }) => {
  const [weather, setWeather] = useState({});

  // Get your API key from weatherstack.com and run the app with `($env:REACT_APP_API_KEY = 'api-key') -and (npm start)`
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = "http://api.weatherstack.com/current?access_key=" + API_KEY + "&query=" + country.name;

  useEffect(() => {
    axios.get(URL).then((res) => {
      setWeather(res.data.current);
    });
  }, [URL]);

  return (
    <>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {country.languages.map((lang) => (
          <li key={lang.iso639_1}>{lang.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt="Flag of country" style={{ maxWidth: "250px" }} />
      <h2>Weather in {country.name}</h2>
      <p>Temperature: {weather.temperature} celsius</p>
      <img src={weather.weather_icons} alt="Current Weather" style={{ maxWidth: "250px" }} />
      <p>
        Wind: {weather.wind_speed} mph direction {weather.wind_dir}
      </p>
    </>
  );
};

export default CountryDetails;
