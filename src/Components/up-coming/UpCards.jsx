import { AiOutlinePlayCircle } from "react-icons/ai";
export default function UpCards({ item: { cover, name, time } }) {
  return (
    <>
      <div className="movieBox">
        <div className="imgBox coverMovieImages">
          <img src={cover} alt="image cover" />
        </div>
        <div className="text">
          <h3>{name}</h3>
          <span>{time}</span> <br />
          <button className="primary-btns">
            <AiOutlinePlayCircle className="moviePlayIcon" />
          </button>
        </div>
      </div>
    </>
  );
}
