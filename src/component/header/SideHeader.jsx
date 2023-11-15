import "./Header.css";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="header">
        <div className="header-icon flex">
          <Link to={`/`}>
            <BiArrowBack className="head-icons icons side-icon" />
          </Link>
          <RxHamburgerMenu
            className="head-icons icons side-icon menuSideIcon"
            onClick={() => setNavOpen(!navOpen)}
          />
        </div>

        {navOpen && (
          <div className="header-nav flex">
            <div className="cancel" onClick={() => setNavOpen(false)}>
              <MdCancel />
            </div>
            <Link
              to="/"
              className="header_category"
              onClick={() => setNavOpen(false)}
            >
              Home
            </Link>
            <Link
              to="movies/popular"
              className="header_category"
              onClick={() => setNavOpen(false)}
            >
              <span>Popular Movies</span>
            </Link>
            <Link
              to="movies/top_rated"
              className="header_category"
              onClick={() => setNavOpen(false)}
            >
              <span>Top Rated</span>
            </Link>
            <Link
              to="movies/upcoming"
              className="header_category"
              onClick={() => setNavOpen(false)}
            >
              <span>Upcoming</span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
