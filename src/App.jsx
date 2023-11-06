import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import "./App.css";
import Home from "./Pages/home/Home";
import MovieList from "./component/MovieList/MovieList";
import Movie from "./Pages/MovieDetails/Movie";
import Error from "./component/Error/Error";

function App() {
  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
