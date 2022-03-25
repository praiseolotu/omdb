import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import EachMovie from "./EachMovie";
import makeStyles from './styles'
// import axios from "axios";
// import _ from "lodash";

const App = () => {
  const [movie, setMovie] = useState({});
  const [search, setSearch] = useState("");
  const classes = makeStyles():
  // useEffect(async () => {
  //   const movies = await axios.get(
  //     `http://www.omdbapi.com/?i=tt3896198&apikey=416bc9c6=${
  //       search != "" ? search : "movies"
  //     }`
  //   );
  //   let groupData = _.groupBy(movies.data.Search, "Type");
  //   setMovie(Object.entries(groupData));
  // }, [search]);
  const loadData = async () => {
    const response = await fetch(
      "http://www.omdbapi.com/?s=movies&apikey=416bc9c6"
    );
    const data = await response.json();
    setMovie(data);
    console.log(data);
  };
  useEffect(() => {
    loadData();
  }, [search]);
  return (
    <>
      <Header />
      <div style={{ margin: "130px 0" }}></div>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="spiderman"
        style={{ width: "100%", borderRadius: "25px" }}
      />
      {movie.length &&
        movie.map((each, index) => {
          return (
            <>
              {/* issues with apikey */}
              <div key={index}>
                <div>{each.Poster}</div>
                <div>
                  {each[1].map((item, index) => (
                    <div key={index}>
                      <img src={item.Poster} alt="" />
                      <div>{item.Title}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div style={{ marginTop: "25px" }}>{each.movie.Poster}</div>
              <div style={{ marginTop: "25px" }}>{each.movie.Title}</div> */}
            </>
          );
        })}
      {/* {movie.map((each, index) => {
        return (
          <EachMovie
            key={index}
            title={each.movie.Title}
            poster={each.movie.Poster}
          />
        );
      })} */}
      {/* {[1, 2, 3, 4, 5].map((each, index) => (
        <EachMovie index={index} />
      ))} */}

      <Footer />
    </>
  );
};

export default App;
