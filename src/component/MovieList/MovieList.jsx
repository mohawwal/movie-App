import { useEffect, useState } from "react";
import "./MovieList.css";
import { useParams } from "react-router-dom";
// import SideHeader from "../../component/header/SideHeader";

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, [type]);

  function getData() {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((resp) => resp.json())
      .then((data) => setMovieList(data.results));
  }

  return (
    <div>
      <div className="movie__list">
        <h2 className="movie__title">
          {(type ? type : "POPULAR").toUpperCase()}
        </h2>
        <div className="list__cards">
          {movieList.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie ? movie.original_title : "Movie Poster"}
                className="cards__img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
