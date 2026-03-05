import {useEffect, useState} from "react";
import "./style.css";
import {useParams} from "react-router";
import axios from "axios";
function index() {
  const movieId = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const fetchin = async () => {
      const url = `http://localhost:3000/api/purchases/${movieId.movie}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      setMovie(result);
    };
    fetchin();
  }, []);
  // console.log(movie.seats?);
  async function hndleClick(i) {
    console.log(i);
    setMovie({
      ...movie,
      seats: movie.seats.map((v, index) => (index === i ? "taken" : v)),
    });
    const url = "http://localhost:3000/api/purchases";
    const res = await axios({
      url,
      method: "post",
      data: {seatNumber: i, movieId: movieId.movie},
    });

    // movie.seats[i] = "taken";
  }
  return (
    <section>
      <section className="header-section">
        <div className="right">Movie id: {movieId.movie}</div>
        <div className="left">left</div>
      </section>
      <section className="main-seats-page">
        <section className="grid">
          {movie.seats?.map((v, i) => (
            <div onClick={() => hndleClick(i)} className={v}>
              {i}
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}

export default index;
