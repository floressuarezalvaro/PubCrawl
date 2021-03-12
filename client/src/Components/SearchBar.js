import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

const SearchBar = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {});
  }, []);

  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <form>
            <div class="input-field blue">
              <input id="search" type="search" required />
              <label class="label-icon" for="search">
                <i class="material-icons">search</i>
              </label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;