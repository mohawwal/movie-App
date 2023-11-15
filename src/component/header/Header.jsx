import "./Header.css";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <>
      <div className="header">
        <div className="header-icon flex">
          <CgProfile
            className="head-icons icons"
            onClick={() => setProfile(!profile)}
          />
          <RxHamburgerMenu
            className="head-icons icons"
            onClick={() => setNavOpen(!navOpen)}
          />
        </div>
        {profile && (
          <div className="nav-links flex sameNav">
            <div className="cancel" onClick={() => setProfile(false)}>
              <MdCancel />
            </div>
            <a
              className="flex head-link"
              href="mailto:aanileleye.email@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                {" "}
                <AiOutlineMail />
              </span>{" "}
              <p>Mail</p>
            </a>
            <a
              className="flex head-link"
              href="https://twitter.com/_mohawwal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <RiTwitterXLine />
              </span>{" "}
              <p>Twitter</p>
            </a>
            <a
              className="flex head-link"
              href="https://www.linkedin.com/in/anileleye-awwal-878556145/"
            >
              <span>
                <AiFillLinkedin />
              </span>
              <p>Linkedin</p>
            </a>
          </div>
        )}

        {navOpen && (
          <div className="header-nav flex sameNav">
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
              to="/movies/popular"
              className="header_category"
              onClick={() => setNavOpen(false)}
            >
              <span>Popular Movies</span>
            </Link>
            <Link
              to="/movies/top_rated"
              className="header_category"
              onClick={() => setNavOpen(false)}
            >
              <span>Top Rated</span>
            </Link>
            <Link
              to="/movies/upcoming"
              className="header_category"
              onClick={() => setNavOpen(false)}
            >
              <span>Upcoming</span>
            </Link>
            {/* <Link
              to="/movie/favorite"
              className="header_category"
              onClick={() => setNavOpen(false)}
            >
              <span>Favorite</span>
            </Link> */}
          </div>
        )}
      </div>
    </>
  );
}
