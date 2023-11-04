import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Banner.css"

import requests from "../Requests";
const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);
  console.log(movie)
  return (
    <header
    className="banner"
    style={{
      backgroundSize: "cover",
      backgroundImage: `url(${base_url}${movie?.backdrop_path})`, // Use 'movie' instead of 'movies'
      backgroundPosition: "center center",
    }}
  >
    <div className="banner__content">
      <div className="banner_align">
      <h1 >{movie?.name || movie?.title || movie?.original_name} </h1>
      <div className="banner__buttons">
        <button className="banner__button" >Play</button>
        <button className="banner__button" >My List</button>
        </div>
      </div>
      <h5 className="banner__overview">{movie?.overview}</h5>
    </div>
    <div className="faded__bottom"/>
  </header>
  );
}

export default Banner;
