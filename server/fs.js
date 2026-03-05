import {readFile, writeFile} from "fs/promises";
// import {readFile, writeFile} from "./data/seats.json";
const objUrl = {movies: "./data/data.json", purchases: "./data/purchases.json"};

export async function read_file(url) {
  try {
    const data = await readFile(objUrl[url], "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function write_file(url, data) {
  try {
    const str = JSON.stringify(data)
    console.log(str);
    const res = await writeFile(objUrl[url], str, "utf8");
    return res;
  } catch (err) {
    console.error(err);
    return [];
  }
}
