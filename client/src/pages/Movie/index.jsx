import "./style.css";
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router";

function index() {
  const movieId = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const fetchin = async () => {
      const url = `http://localhost:3000/api/movies/${movieId.movie}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      setMovie(result);
    };
    fetchin();
  }, []);
  return (
    <section className="movie-page-main">
      <img src={movie.Images} alt="" />
        <Link className="link" to={"seats"}>Chose Seats</Link>
     
      <section className="right">
        <p>name: {movie.Title}</p>
        <br />
        <div className="litle-divs">IMDb: {movie.IMDb}</div>
        <div className="litle-divs">Votes: {movie.Votes}</div>
        <div className="litle-divs">Metascore:{movie.Metascore}</div>
        <div>
          <h2>story</h2>
          {movie.Plot}
        </div>
        <p>Year: {movie.Year}</p>
        <p>Movie id: {movie.imdbID}</p>

        <Link className="link" to={"/"}>Beck Home</Link>

      </section>
    </section>
  );
}

export default index;
