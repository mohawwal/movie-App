import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import HomePage from "./Components/home/HomePages";
import Footer from "./Components/Footer/Footer";
import SinglePage from "./Components/watch/SinglePage";

function App() {
  return (
    <>
      <Router>
        <div className="appHeader">
          <Header />
        </div>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/singlePage/:id" Component={SinglePage} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
