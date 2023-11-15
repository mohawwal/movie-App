import { useEffect, useState } from "react";
import "./MovieList.css";
import Card from "../card/Card";
import { useParams } from "react-router-dom";
import SideHeader from "../../component/header/SideHeader";

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, [type]);

  function getData() {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "upcoming"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((resp) => resp.json())
      .then((data) => setMovieList(data.results));
  }

  return (
    <div>
      <div>
        <SideHeader />
      </div>
      <div className="movie__list">
        <h2 className="movie__title">
          {(type ? type : "POPULAR").toUpperCase()}
        </h2>
        <div className="list__cards">
          {movieList.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
