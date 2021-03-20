import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Crawl from "./Crawl";
import axios from "axios";
import M from "materialize-css";

const SearchCrawl = () => {
  const [search, setSearch] = useState("");
  const [barArray, setbarArray] = useState([]);
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const submitSearch = async (e) => {
    e.preventDefault();
    try {
      const searchRes = await axios.get(
        `http://beermapping.com/webservice/loccity/87f85a8575cbea176e660fb72ddfcc3c/${search}&s=json`
      );
      setbarArray(searchRes.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});
  }, []);

  return (
    <div>
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
      <label>Browser Select</label>
      <select className="browser-default">
        <option value="" disabled selected>
          Choose your option
        </option>
        <option>
          {barArray.map((item, index) => (
            <Crawl item={item} key={index} />
          ))}
          {/* <ul className="list-group container">
            {barArray.map((item, index) => (
              <Crawl item={item} key={index} />
            ))}
          </ul> */}
        </option>
      </select>
      <ul className="list-group container">
        {barArray.map((item, index) => (
          <Crawl item={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default SearchCrawl;
