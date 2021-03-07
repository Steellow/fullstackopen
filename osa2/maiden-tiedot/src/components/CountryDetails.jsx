import React from "react";

const CountryDetails = ({ country }) => {
  return (
    <>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages</h3>
      <ul>
        {country.languages.map((lang) => (
          <li key={lang.iso639_1}>{lang.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt="Flag of country" style={{ maxWidth: "250px" }} />
    </>
  );
};

export default CountryDetails;
