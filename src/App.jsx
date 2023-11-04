// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./component/header/Header";
// import Home from "./Pages/home/Home";
// import MovieList from "./component/MovieList/MovieList";
// import Movie from "./Pages/home/MovieDetails/Movie";
// // import Card from "./component/card/Card";

// function App() {
//   return (
//     <>
//       <Router>
//         <Header />
//         <Routes>
//           <Route index element={<Home />} />
//           <Route path="movie/:id" element={<Movie />} />
//           <Route path="movies/:type" element={<MovieList />} />
//           <Route path="/*" element={<h1>Error Page</h1>} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

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
        <div>
          <Header />
        </div>
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
