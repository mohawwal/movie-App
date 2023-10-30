import { AiFillStar, AiOutlinePlayCircle } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";
import { ImPlay2 } from "react-icons/im";
import { IoIosPlay } from "react-icons/io";
import { Link } from "react-router-dom";

export default function HomeCard({
  item: { id, cover, name, rating, time, desc, starring, genres, tags, videos },
}) {
  return (
    <>
      <div className="box">
        <div className="coverImages">
          <img src={cover} alt="images cover" />
        </div>
        <div className="content flex">
          <div className="details row">
            <h1>{name}</h1>
            <div className="rating flex">
              <AiFillStar className="star-icon" />
              <AiFillStar className="star-icon" />
              <AiFillStar className="star-icon" />
              <AiFillStar className="star-icon" />
              <BiSolidStarHalf className="star-icon" />
            </div>
            <label>{rating}</label>
            <span className="GP">GP</span>
            <label>{time}</label>
          </div>
          <p className="desc">{desc}</p>
          <div className="cast">
            <h4>
              <span>Starring</span>
              {starring}
            </h4>
            <h4>
              <span>Genres</span>
              {genres}
            </h4>
            <h4>
              <span>Tags</span>
              {tags}
            </h4>
          </div>
          <button className="primary-btn">
            <AiOutlinePlayCircle /> PLAY NOW
          </button>
        </div>
        <div className="playButton row">
          <Link to={`/singlePage/${id}`}>
            <button>
              <div className="img">
                <ImPlay2 className="playImg" />
                <IoIosPlay className="change" />
              </div>
              WATCH TRAILER
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
