import express from "express";
import cors from "cors";
import {read_file, write_file} from "./fs.js";
import moviesR from "./router/moviesR.js";
import purchasesR from "./router/purchasesR.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.use("/api/movies", moviesR);
app.use("/api/purchases", purchasesR);

// app.use(cors());

app.listen(port, () => {
  console.log(`server runing on port: ${port}`);
});
