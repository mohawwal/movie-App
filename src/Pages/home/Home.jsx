import "./Home.css";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { AiOutlineStar, AiFillPlayCircle } from "react-icons/ai";
import MovieList from "../../component/MovieList/MovieList";
import Header from "../../component/header/Header";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  // const [mobile, setMobile] = useState(true);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setPopularMovies(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <>
      <div className="Head">
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
              to={`/movie/${movie.id}`}
              key={movie.id}
              className="movieDetails"
            >
              <div className="posterImg">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt=""
                />
              </div>

              <div className="posterImage__overlay">
                <div className="poster__title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage__runtime">
                  <span>{movie ? movie.release_date : ""} </span>
                  <span className="posterImage__rating">
                    {movie ? movie.vote_average : ""}
                  </span>
                  <span>
                    <AiOutlineStar /> {""}
                  </span>
                  {/* <div className="vote_average">
                    <span>{movie.vote_average}</span>
                  </div> */}
                </div>
                <div className="posterImage__description">
                  <div className="posterImage__description">
                    {movie
                      ? movie.overview.slice(0, 90) +
                        (movie.overview.length > 90 ? "..." : "")
                      : ""}
                  </div>
                </div>
                <div className="flex play">
                  <span className="playMovie">
                    <AiFillPlayCircle />
                    <p>PLAY NOW</p>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList />
      </div>
    </>
  );
}
