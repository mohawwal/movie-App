import "./Header.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiHamburger } from "react-icons/gi";
import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow(true);
  }

  return (
    <>
      <div className="header flex">
        <div className="headerLeft flex">
          <Link to="/" className="headerBurger" onClick={toggle}>
            <RxHamburgerMenu className="icon" />
          </Link>

          {show && (
            <div className="headerNav flex">
              <div className="closeBurger" onClick={() => setShow(false)}>
                <GiHamburger className="icon" />
              </div>
              <Link to="/" className="header-category">
                <span>Home</span>
              </Link>
              <Link to="/movies/popular" className="header-category">
                <span>Popular</span>
              </Link>
              <Link to="/movies/top_rated" className="header-category">
                <span>Top Rated</span>
              </Link>
              <Link to="/movies/upcoming" className="header-category">
                <span>Upcoming</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
