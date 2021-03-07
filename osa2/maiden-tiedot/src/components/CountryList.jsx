import React, { useState } from "react";
import CountryDetails from "./CountryDetails";

const CountryList = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const selectCountry = (country) => {
    setSelectedCountry(country);
  };

  if (selectedCountry == null) {
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.alpha2Code}>
            {country.name} <button onClick={() => selectCountry(country)}>show</button>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <div>
        <button style={{ marginTop: "30px" }} onClick={() => selectCountry(null)}>
          back to results
        </button>
        <CountryDetails country={selectedCountry} />
      </div>
    );
  }
};

export default CountryList;
