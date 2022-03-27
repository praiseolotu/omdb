import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import EachMovie from "./EachMovie";
import "./App.css";
import "bootswatch/dist/lux/bootstrap.min.css";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const loadData = async () => {
    const response = await fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=416bc9c6&s=spiderman"
    );
    const data = await response.json();
    setData(data.Search);
    setLoading(false);
    setError("");
    console.log(data);
  };
  useEffect(() => {
    loadData();
  }, [search]);
  // function to handle user submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (search === "") {
      return setError("Please Enter a valid text");
    }
    const response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=416bc9c6&s=${search}`
    );
    const data = await response.json();
    if (!data.Search) {
      return setError("There are no results");
    }
    setData(data.Search);
    setSearch("");
    setError("");
  };
  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-md-4 offset-md-4 p-4">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Spiderman"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              autoFocus
              style={{ marginTop: "50px" }}
            />
            <button type="submit">Submit</button>
          </form>
          <p className="text-white">{error ? error : ""} </p>
        </div>
      </div>
      <div className="row pt-2">
        {/* I decided to display to aviod Error boundary issues in React */}
        {data.map((each, i) => (
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
        ))}
      </div>
      <Footer />
    </>
  );
};

export default App;
