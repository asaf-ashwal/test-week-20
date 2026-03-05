import React from "react";
import "./style.css";
import Button from "../../componnent/Buttons/index";
function index({title, img, year, runtime, genre, Language}) {
  return (
    <section className="card-section">
      <img src={img} alt="" />
      <p>{title}</p>
      <p>{year}</p>
      <p>{runtime}</p>
      <p>{Language}</p>
      <Button text={"Select Seats"} />
    </section>
  );
}

export default index;
