import {read_file} from "../fs.js";
import { getMovieSeatsS, purchasesSeatS } from "../services/purchasesS.js";

export async function movieInfo(req, res) {
  const {movieId} = req.params;

  const movie = await getMovieSeatsS(movieId); 
  if(!movie) return res.status(400).send(" we dontr have this movie !");
  res.send(movie);
}

export async function purchasesSeat(req, res) {
  if (!req.body) return res.status(400).send("body is requier !");
  const {movieId, seatNumber} = req.body;
  console.log(req.body);
  
  if (!movieId || !seatNumber === undefined) return res.status(400).send("all filds requier !");
  const result = await purchasesSeatS(movieId, seatNumber); 
  console.log(result);
  
  if (!result) return res.status(400).send("seat tuken !");

  res.send(result);
  // const data = await read_file("purchases");
}
