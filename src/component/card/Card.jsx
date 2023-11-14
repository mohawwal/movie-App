import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Card.css";
import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";

export default function Card({ movie }) {
  const [isLoading, setIsLoading] = useState(true);
  const [favMovies, setFavMovies] = useState([]);
  const [like, setLike] = useState(true);

  function flipLove() {
    setLike(!like);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return isLoading ? (
    <div className="cards">
      <SkeletonTheme color="#202020" highlightColor="#444">
        <Skeleton height={300} duration={2} />
      </SkeletonTheme>
    </div>
  ) : (
    <div className="AllCards flex">
      <Link to={`/movie/${movie.id}`} className="movieCard">
        <div className="cards">
          <div className="cardImg">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie ? movie.original_title : "Movie Poster"}
              className="cards__img"
            />
          </div>
        </div>
      </Link>
      <div className="cardSection">
        <div className="cards__title">
          <h3>{movie && movie.original_title}</h3>
        </div>
        <div className={like ? "like" : "love"}>
          {<AiFillHeart onClick={flipLove} className="heart" />}
        </div>
      </div>
    </div>
  );
}
