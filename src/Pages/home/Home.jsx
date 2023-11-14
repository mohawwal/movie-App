import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import Header from "../../component/header/Header";
import MovieList from "../../component/MovieList/MovieList";
// import MovieType from "./movieTypes/movieType";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { BsFillPlayCircleFill } from "react-icons/bs";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setPopularMovies(data.results), console.log(data.results);
      });
  }, []);
  return (
    <div className="HomeSpace">
      <div>
        <Header />
      </div>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              key={movie.id}
              to={`movie/${movie.id}`}
              className="movieDetails"
            >
              <div className="posterImg">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt="Movies"
                />
              </div>
              <div className="posterImage__overlay">
                <div>
                  <div className="title">
                    <h1 className="poster__title">
                      {movie ? movie.original_title : " "}
                    </h1>
                  </div>
                  <p className="releaseDate">
                    {movie ? movie.release_date : " "}
                  </p>
                  <div className="rating">
                    <span>{movie ? movie.vote_average : " "}</span>
                    <span>
                      {movie ? movie.original_language.toUpperCase() : " "}
                    </span>
                  </div>
                  <p className="posterImage__description">
                    {movie ? movie.overview : " "}
                    {/* {movie ? movie.overview.slice(0, 100) + "..." : " "} */}
                  </p>
                </div>
                <div className="play">
                  <a
                    className="play-icon"
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                      movie.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsFillPlayCircleFill />
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
