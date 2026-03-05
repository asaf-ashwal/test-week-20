import {read_file, write_file} from "../fs.js";

export async function getMovieSeatsS(movieId) {
  const allMovies = await read_file("movies");
  const movie = allMovies.find((v) => v.imdbID === movieId);
  if (!movie) return false;
  const seats = await read_file("purchases");
  const movieSeat = seats.find((v) => v.movieId === movieId);
  if (movieSeat) return movieSeat;
  const newMovieSeats = newMovie(movieId);
  seats.push(newMovieSeats);

  await write_file("purchases", seats);
  return newMovie;
}

export async function purchasesSeatS(movieId, seatNumber) {
  const allMovies = await read_file("movies");
  const movie = allMovies.find((v) => v.imdbID === movieId);
  if (!movie) return false;
  const seats = await read_file("purchases");
  const movieSeat = seats.find((v) => v.movieId === movieId);
  if (movieSeat) {
    if (movieSeat.seats[seatNumber] === "taken") return false;
    movieSeat.seats[seatNumber] = "taken";
  }
   else {
    const newMovieSeats = newMovie(movieId);
    newMovieSeats.seats[seatNumber] = "taken";
    seats.push(newMovieSeats);
  }
  await write_file("purchases", seats);
  return true
}

function newMovie(movieId) {
  const res = {movieId, seats: []};
  for (let i = 0; i < 30; i++) {
    res.seats.push("available");
  }
  return res;
}
