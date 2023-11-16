import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./component/header/Header";
import Footer from "./Pages/home/footer";
import Home from "./Pages/home/Home";
import Movie from "./component/MovieDetails/Movie";
import "./App.css";
import MovieList from "./component/MovieList/MovieList";
import Error from "./component/Error/Error";
import Folder from "./component/header/Folder";
import Profile from "./Pages/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="/folder" element={<Folder />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
