import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";

export default function Folder() {
  return (
    <div>
      <div className="folder">
        <div className="cancel">
          <Link to="/">
            <MdCancel />
          </Link>
        </div>
        <div className="categoriesFolders">
          <Link to="/movies/popular" className="categoriesFolder">
            <p>Popular</p>
            <span>
              <FaAngleRight />
            </span>
          </Link>
        </div>
        <div className="categoriesFolders">
          <Link to="/movies/top_rated" className="categoriesFolder">
            <p> Rated</p>
            <span>
              <FaAngleRight />
            </span>
          </Link>
        </div>
        <div className="categoriesFolders">
          <Link to="/movies/upcoming" className="categoriesFolder">
            <p>Upcoming</p>
            <span>
              <FaAngleRight />
            </span>
          </Link>
        </div>
      </div>
      r
    </div>
  );
}
