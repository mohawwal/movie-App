import "./Movie.css";
import { useEffect, useState } from "react";
// import SideHeader from "../../component/header/SideHeader";
import { AiFillHeart } from "react-icons/ai";
import { FaAngleLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";
import { FaCirclePlay } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import { FaAngleDoubleDown } from "react-icons/fa";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export default function Movie() {
  const [currentMovieDetail, setMovie] = useState(null);
  const { id } = useParams();
  const [like, setLike] = useState(true);
  const [overView, setOverView] = useState(false);

  function flipLove() {
    setLike(!like);
  }

  function flipView() {
    setOverView(!overView);
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
            <div className="sideMovie">
              <div className="coverImg">
                <div className="movieDet">
                  <img
                    src={`https://image.tmdb.org/t/p/original${currentMovieDetail.backdrop_path}`}
                    alt="img"
                  />
                </div>
                <div className="movieLabel">
                  <div className="label">
                    <Link to="/">
                      <FaAngleLeft />
                    </Link>
                    <h3>NETFLIX</h3>
                    <div className={like ? "like" : "love"}>
                      {<AiFillHeart onClick={flipLove} className="heart" />}
                    </div>
                  </div>
                  <div className="sidePlay">
                    <a
                      className="play-icon"
                      href={
                        currentMovieDetail ? currentMovieDetail.homepage : " "
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaCirclePlay className="playMov" />
                    </a>
                  </div>
                </div>

                <div className="NextSection">
                  <div className="nextTitle">
                    <div className="nextIcon">
                      <IoIosAdd className="icons add" />
                    </div>
                    <div className="nextText">
                      <h2>
                        {currentMovieDetail ? currentMovieDetail.title : " "}
                      </h2>
                    </div>
                    <div className="nextIcon">
                      <IoMdShare className="icons" />
                    </div>
                  </div>
                  <div className="secondText">
                    <span>
                      {currentMovieDetail.genres.map((genre) => (
                        <p key={genre.id}>{" " + genre.name}</p>
                      ))}
                    </span>
                    <div className="secondStars">
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                    </div>
                    <div className="secondDetails">
                      <div>
                        <p>Year</p>
                        <h4>
                          {currentMovieDetail
                            ? currentMovieDetail.vote_average
                            : " "}
                        </h4>
                      </div>
                      <div>
                        <p>Country</p>
                        <h4>
                          {currentMovieDetail
                            ? currentMovieDetail.original_language
                            : " "}
                        </h4>
                        {/* {currentMovieDetail.production_countries.map(
                          (movieCountry) => (
                            <h4 key={movieCountry.id}>
                              {movieCountry.iso_3166_1}
                            </h4>
                          )
                        )} */}
                      </div>
                      <div>
                        <p>Date</p>
                        <h4>{currentMovieDetail.release_date}</h4>
                      </div>
                    </div>

                    <div>
                      <p className="tagline">
                        {currentMovieDetail ? currentMovieDetail.tagline : ""}
                      </p>

                      <div>
                        <div onClick={flipView} className="arrowFlip">
                          {overView ? (
                            <MdKeyboardDoubleArrowUp className="arrow" />
                          ) : (
                            <FaAngleDoubleDown className="arrow" />
                          )}
                        </div>
                        <div className="overview">
                          {overView ? (
                            <p>
                              {currentMovieDetail
                                ? currentMovieDetail.overview
                                : " "}
                            </p>
                          ) : (
                            " "
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
