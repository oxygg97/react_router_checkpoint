import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Trailer from "./components/Trailer";
function App() {
  const [movies, setmovies] = useState([
    {
      title: "Game of thrones",
      description: "Genre : Fantasy",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61r-vt0bLZL._AC_SX522_.jpg",
      rate: "3",
    },
    {
      title: "Breaking bad",
      description:
        "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
      rate: "4",
    },
    {
      title: "hunter x hunter",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/08/01/09/52/4803203.jpg",
      rate: "5",
    },
    {
      title: "movie 1",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNzU4NWEwNDItMzMzYy00ZDYyLWIxZjMtMDlkYWVjNjQwYzBjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      rate: "5",
    },
    {
      title: "Free guy",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl: "https://i.ytimg.com/vi/N2R2bjxjcS0/movieposter_en.jpg",
      rate: "3.5",
    },
    {

      title: "Adam's family ",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://www.miconcinemas.com/media/1712/webtheaddamsfamily2_payoffposter_resizewidth-800.jpg",
      rate: "4",
    },
  ]);
  const addmovie = (newmovie) => {
    setmovies([...movies, newmovie]);
  };
  return (
    <div className="App">
      <Navigation />
      <AddMovie  addmovie={addmovie} />

      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trailer/:name" element={<Trailer movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
