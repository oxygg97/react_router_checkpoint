import "../App.css";

import MovieCards from "./MovieCards";
import Filter from "./Filter";
import { useState } from "react";

const MovieList = ({ movies }) => {
  const [text, settext] = useState("");
  const [rate, setrate] = useState("");
  const filterText = (text) => {
    settext(text);
  };
  console.log({ rate });
  return (
    <div className="cards">
      
      <Filter setfilterrate={setrate} setFilterText={settext} />
      {(text.length
        ? movies.filter(
            (el) =>
              el.title.toLowerCase().includes(text.toLowerCase()) &&
              el.rate >= rate
          )
        : movies
      ).map((el) => (
        <MovieCards movie={el} />
      ))}
    </div>
  );
};

export default MovieList;
