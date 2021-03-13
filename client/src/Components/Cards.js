// import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";

const Cards = ({ item }) => {
  console.log(item);

  const { name, city, state } = item;
  return (
    <div>
      <div className="row" id="barList">
        <div className="col s12 m6 l4">
          <div className="card grey lighten-5">
            <div className="card-content grey-text">
              <p className="#bar-name">{name}</p>
              <p className="#city-name">{city}</p>
              <p className="#state">{state}</p>
              <div className="card-action"></div>
              <a className="btn-floating halfway waves-effect waves-light red">
                <i className="material-icons">favorite</i>
              </a>
              {/* <a className="btn-floating waves-effect waves-light red">
                <i className="material-icons">add</i>
              </a>
              <a
                className="waves-effect waves-light btn modal-trigger amber-text grey darken-3"
                data-id="0"
                href="#modal1"
              >
                button
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
