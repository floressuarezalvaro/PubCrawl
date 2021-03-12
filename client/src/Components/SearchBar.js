import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import axios from "axios";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const submitSearch = async (e) => {
    e.preventDefault();
    try {
      const testingRoute = await axios.get(
        `http://beermapping.com/webservice/loccity/87f85a8575cbea176e660fb72ddfcc3c/${search}&s=json`
      );
      console.log(testingRoute);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={submitSearch}>
        <input type="text" onChange={onChange} />
      </form>
    </div>
  );
};

export default SearchBar;
