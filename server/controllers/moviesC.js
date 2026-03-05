import {read_file} from "../fs.js";

export async function getAllMovies(req, res) {
  const data = await read_file("movies");
  res.send(data);
}
export async function getMovie(req, res) {
  const {movieId} = req.params;
  const data = await read_file("movies");
  const result = data.find((m) => m.imdbID === movieId);
  res.send(result);
}
