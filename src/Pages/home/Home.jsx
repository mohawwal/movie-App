import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import Header from "../../component/header/Header";
// import MovieList from "../../component/MovieList/MovieList";
// import MovieType from "./movieTypes/movieType";
// import Footer from "./footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { FaStar } from "react-icons/fa";

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
          className="custom-carousel"
        >
          {popularMovies.map((movie) => (
            <Link key={movie.id} to={`movie/${movie.id}`}>
              <div className="HomeMovieDetails">
                <div className="movieDetails">
                  <div className="posterImg">
                    <img
                      src={`https://image.tmdb.org/t/p/original${
                        movie && movie.backdrop_path
                      }`}
                      alt="Movies"
                    />
                  </div>
                </div>
                <div className="posterMovieImg">
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      movie && movie.poster_path
                    }`}
                    alt=""
                  />
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
      <div className="otherCat">
        <h3>Popular on Netflix</h3>
        <div className="popularMovies">
          {popularMovies.map((movie) => (
            <Link key={movie.id} to={`movie/${movie.id}`}>
              <div key={movie.id} className="popularNet">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt=""
                />
                <div className="topic flex">
                  <h4>{movie ? movie.title : " "}</h4>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
