import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";

export const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);
  
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
 
  const handClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || "")
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          } else {
            console.log("No trailer found for this movie.");
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      {/* Title */}
      <h1 className="row__title">{title}</h1>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            onClick={() => handClick(movie)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
            key={movie.id}
          />
        ))}
      </div>
      <div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
      {/* Container */}
    </div>
  );
};
