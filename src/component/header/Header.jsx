import "./Header.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(true);

  function menuOption() {
    setShow(!show);
    console.log("seen");
  }
  return (
    <>
      <div onClick={menuOption}>
        <RxHamburgerMenu />
      </div>
      <div className="header flex">
        <div className="headerLeft flex">
          <Link to="/">
            <img src="/Images/Tape.gif" className="header_icon flex" alt="" />
          </Link>
          {show && (
            <div className="headerLeft flex">
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
