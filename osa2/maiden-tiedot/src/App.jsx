import React, { useState, useEffect } from "react";
import axios from "axios";
import Result from "./components/Result";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      find countries <input onChange={handleSearchChange} value={search} type="text" />
      {search !== "" ? <Result countries={filteredCountries} /> : <div></div>}
    </div>
  );
};

export default App;
