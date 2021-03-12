import React, { useState } from "react";
import Cards from "../Components/Cards";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";

const Search = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Cards />
    </div>
  );
};

export default Search;
