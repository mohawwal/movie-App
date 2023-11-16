import { IoMdHome } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
// import Folder from "../../component/header/Folder";

export default function Footer() {
  return (
    <div className="footer flex">
      <Link to="/" className="footIcons">
        <IoMdHome />
      </Link>
      <div className="footIcons">
        <Link to="/Folder">
          <BiCategory />
        </Link>
      </div>
      <div className="footIcons">
        <Link to="/Profile">
          {" "}
          <RxAvatar />
        </Link>
      </div>
    </div>
  );
}
