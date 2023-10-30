import { Link } from "react-router-dom";
import "./header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { useState } from "react";
import { MdCancel } from "react-icons/md";

export default function Header() {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <img src="/Images/logo.png" alt="app Logo" />
            </div>
            <ul
              className={mobile ? "navMenu-list" : "flexSB"}
              onClick={() => setMobile(false)}
            >
              <Link className="links" to="/">
                Home
              </Link>
              <Link className="links" to="/Series">
                Series
              </Link>
              <Link className="links" to="/Movies">
                Movies
              </Link>
              <Link className="links" to="/Page">
                Page
              </Link>
              <Link className="links" to="/Pricing">
                Movies
              </Link>
              <Link className="links" to="/Contact">
                Contact
              </Link>
            </ul>
            <button className="toggle" onClick={() => setMobile(!mobile)}>
              {mobile ? (
                <MdCancel className="cancel" />
              ) : (
                <RxHamburgerMenu className="hamburger" />
              )}
            </button>
          </nav>
          <div className="icons-header account">
            <BsSearch className="header-icons" />
            <BsBell className="header-icons" />
            <BiUser className="header-icons" />
            <button className="subscribe-btn">Subscribe Now</button>
          </div>
        </div>
      </header>
    </>
  );
}
