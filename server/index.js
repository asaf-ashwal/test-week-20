import express from "express";
import cors from "cors";
import {read_file, write_file} from "./fs.js";
import moviesR from "./router/moviesR.js";
import purchasesR from "./router/purchasesR.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use("/api/movies", moviesR);
app.use("/api/purchases", purchasesR);

app.use(cors());
app.use(cors());

// POST / api / purchases;
// body : { movieId, seatNumber }

// GET / api / movies;

// app.get('/',async (req,res)=>{
//     const data = await read_file('movies')
//     res.send(data);
// })
app.get("/addCear", async (req, res) => {
  // req.pa
  const data = await write_file("seats", ["bayd"]);
  res.send(data);
});

app.listen(port, () => {
  console.log(`server runing on port: ${port}`);
});
