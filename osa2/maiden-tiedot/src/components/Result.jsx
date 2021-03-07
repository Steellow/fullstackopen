import React from "react";
import CountryDetails from "./CountryDetails";
import CountryList from "./CountryList";

const Result = ({ countries }) => {
  if (countries.length === 0) {
    return <div>Can't find country</div>;
  } else if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countries.length === 1) {
    return <CountryDetails country={countries[0]} />;
  } else {
    return <CountryList countries={countries} />;
  }
};

export default Result;
