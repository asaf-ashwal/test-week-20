import { read_file } from "../fs.js";

export async function getAllMovies(req, res) {
    const data = await read_file('movies')
        res.send(data);
}