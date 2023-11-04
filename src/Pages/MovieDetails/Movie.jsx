// import { useEffect, useState } from "react";
// import "./Movie.css";
// import { useParams } from "react-router-dom";

// export default function Movie() {
//   const [currentMovieDetail, setMovie] = useState();
//   const { id } = useParams();

//   useEffect(() => {
//     getData();
//     window.scrollTo(0, 0);
//   }, []);

//   function getData() {
//     fetch(
//       `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setMovie(data);
//         console.log(data);
//       });
//   }

//   return (
//     <>
//       <h1>Movie detail page</h1>
//     </>
//   );
// }
import { useParams } from "react-router-dom";
import "./Movie.css";
import { useEffect, useState } from "react";

export default function Movie() {
  const { id } = useParams();
  const [currentMovieDetail, setMovie] = useState(null);

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  function getData() {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        console.log(data);
      });
  }

  return (
    <>
      {currentMovieDetail ? (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original${currentMovieDetail.poster_path}`}
            alt="img"
          />
          <h2>{currentMovieDetail.original_title}</h2>
          <p>{currentMovieDetail.overview}</p>
          <p>Release Date: {currentMovieDetail.release_date}</p>
          <span>
            <h4>Genre</h4>
          </span>
          <p>Rating: {currentMovieDetail.vote_average}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
