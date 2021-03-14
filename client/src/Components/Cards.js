import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

const Cards = ({ item }) => {
  console.log(item.id);

  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});
  }, []);

  const { id, name, street, city, state, phone, url } = item;
  return (
    <div>
      <div className="row" id="barList">
        <div className="col s12 m6 l6">
          <div className="card grey lighten-5">
            <div className="card-content grey-text">
              <h5 className="#bar-name">{name}</h5>

              <div className="card-action"></div>
              <a className="btn-floating halfway waves-effect waves-light red">
                <i className="material-icons">favorite</i>
              </a>

              {/* <!-- Modal Trigger --> */}
              <button data-target={id} className="btn modal-trigger">
                details
              </button>

              {/* <!-- Modal Structure --> */}
              <div id={id} className="modal">
                <div className="modal-content">
                  <h5 className="#bar-name">{name}</h5>
                  <ul>
                    <li className="#city-name">
                      {street}, {city}, {state}
                    </li>
                    <li className="phone">{phone}</li>
                    <a className="url" href={url}>
                      {url}
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
