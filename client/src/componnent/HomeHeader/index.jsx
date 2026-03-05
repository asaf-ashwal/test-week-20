import React from "react";

function index({ arr, search}) {
  return (
    <header>
      <h1>Movie Night</h1>
      <p>Search a movie and pick your seats</p>
      <input
        onChange={(e) => search(e.target.value)}
        type="text"
        placeholder="search by title..."
      />
      <p>Showing {arr.length} results</p>
    </header>
  );
}

export default index;
