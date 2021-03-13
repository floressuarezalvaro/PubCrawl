import React, { useState } from "react";
import Cards from "../Components/Cards";
import SearchBar from "../Components/SearchBar";

const Search = () => {
  return (
    <div>
      <SearchBar />
      <Cards />
    </div>
  );
};

export default Search;
