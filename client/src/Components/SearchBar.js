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
      {/* <form onSubmit={submitSearch}>
        <input type="text" onChange={onChange} />
      </form> */}

      <nav className="nav-extended grey lighten-1">
        <div className="nav-wrapper grey lighten-1 container">
          <form onSubmit={submitSearch}>
            <div className="input-field">
              <input id="search" type="search" onChange={onChange} required />
              <label className="label-icon" for="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;
