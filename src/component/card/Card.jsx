import { useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { AiOutlineStar } from "react-icons/ai";

export default function Card({ movie }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cards">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.original_title}
              className="cards__img"
            />

            <div className="cards__overlay">
              <div className="cards__title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="cards__runtime">
                {movie ? movie.release_date : ""}
                <span className="card_rating">
                  {movie ? movie.vote_average : ""} <AiOutlineStar />
                </span>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
