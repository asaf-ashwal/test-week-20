import React, {useEffect, useState} from "react";
import HomeHeader from "../../componnent/HomeHeader/index";
import Card from "../../componnent/Card/index";
import {useGlobleSate} from "../../../globalState";
import {useSearch} from "../../hooks/useSearch";
import {Link} from "react-router";
import "./style.css";
function index() {
  const movise = useGlobleSate((state) => state.movise);  
  const isLoading = useGlobleSate((state) => state.isLoading);

  const [mov, setMov] = useState([]);
  const [res, search] = useSearch(mov);
  useEffect(() => {
    const fetchin = async () => {
      const url = `http://localhost:3000/api/movies`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      setMov(result);
    };
    fetchin();
  }, []);
  return (
    <>
      {isLoading && <p>loading...</p>}
      <HomeHeader arr={res} search={search} />
      <sectiom className="main-section">
        {res
          ? res.map((m) => (
              <Link to={m.imdbID}>
                {" "}
                <Card
                  key={m.Title}
                  title={m.Title}
                  img={m.Images[0]}
                  year={m.Year}
                  runtime={m.Runtime}
                  genre={m.Genre}
                  language={m.Language}
                />
              </Link>
            ))
          : ""}
      </sectiom>
    </>
  );
}

export default index;
