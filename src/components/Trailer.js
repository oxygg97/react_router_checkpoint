import React from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";

function Trailer({ movies }) {
  const params = useParams();
  const movie = movies.filter((el) => el.title == params.name)[0];

  return (
    <div>
      <img src={movie.posterUrl} />
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <ReactStars
        count={5}
        size={24}
        activeColor="#ffd700"
        edit={false}
        value={movie.rate}
      />
    </div>
  );
}

export default Trailer;
