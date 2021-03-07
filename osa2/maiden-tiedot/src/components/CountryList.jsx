import React from "react";

const CountryList = ({ countries }) => {
  console.log(countries);
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.alpha2Code}>{country.name}</li>
      ))}
    </ul>
  );
};

export default CountryList;
