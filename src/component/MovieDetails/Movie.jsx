import "./Movie.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideHeader from "../../component/header/SideHeader";
import { AiFillHeart } from "react-icons/ai";

export default function Movie() {
  const [currentMovieDetail, setMovie] = useState(null);
  const { id } = useParams();
  const [like, setLike] = useState(true);

  function flipLove() {
    setLike(!like);
  }

  useEffect(() => {
    getData();
    window.scroll(0, 0);
  }, []);

  function getData() {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setMovie(data), console.log(data);
      });
  }
  return (
    <div>
      <div>
        {currentMovieDetail ? (
          <div className="movie">
            <div>
              <SideHeader />
            </div>
            <div className="sideMovie">
              <div className="coverImg">
                <div className="movieDet">
                  <img
                    src={`https://image.tmdb.org/t/p/original${currentMovieDetail.backdrop_path}`}
                    alt="img"
                  />
                </div>

                <div className="smallImg flex">
                  <img
                    src={`https://image.tmdb.org/t/p/original${currentMovieDetail.poster_path}`}
                    alt=""
                  />
                  <div>
                    <p>
                      {currentMovieDetail
                        ? currentMovieDetail.vote_average + " / 10"
                        : " "}
                    </p>
                    <h2>{currentMovieDetail.original_title}</h2>
                    <p className="tagline">
                      {currentMovieDetail ? currentMovieDetail.tagline : ""}
                    </p>
                    <div className={like ? "like" : "love"}>
                      {<AiFillHeart onClick={flipLove} className="heart" />}
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidePlay">
                <a
                  className="play-icon"
                  href={currentMovieDetail ? currentMovieDetail.homepage : " "}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play Now
                </a>
              </div>
            </div>

            <div className="movieText">
              <p>{currentMovieDetail.overview}</p>
              <span className="release">
                <h4>Release</h4>
                <p>{currentMovieDetail.release_date}</p>
              </span>
              <span>
                <h4>Genre</h4>
                <span>
                  {currentMovieDetail.genres.map((genre) => (
                    <p key={genre.id}>{" " + genre.name}</p>
                  ))}
                </span>
              </span>
              <span>
                <h4>Country</h4>
                {currentMovieDetail.production_countries.map((movieCountry) => (
                  <p key={movieCountry.id}>{movieCountry.iso_3166_1}</p>
                ))}
              </span>
            </div>
          </div>
        ) : (
          <div className="loading">
            <img src="/Images/loading-loading-forever (1).gif" alt="" />
          </div>
        )}
      </div>
    </div>
  );
}
