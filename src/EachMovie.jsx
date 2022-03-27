import React from "react";

const EachMovie = ({ each }) => {
  <>
    <div className="col-md-4">
      <div className="card animated fadeInUp">
        <img
          src={each.Poster}
          alt={each.Title}
          className="card-img-top"
          width="100"
        />
        <div className="card-body">
          <h4>{`${each.Title} (${each.Year})`}</h4>
          <p>{`Movie Type: ${each.Type}`}</p>
        </div>
      </div>
    </div>
  </>;
};

export default EachMovie;
