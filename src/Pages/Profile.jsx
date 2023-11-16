import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="profile">
      <div className="socialMedia">
        <span>
          <a href="<FaGithub />" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/anileleye-awwal-878556145/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </span>
        <span>
          <a
            href="http://twitter.com/_mohawwal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
        </span>

        <span>
          <a
            href="http://mailto:aanileleye@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMdMail />
          </a>
        </span>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <div className="skillsIcon">
          <div>
            <span>
              <FaHtml5 />
            </span>
            <span>
              <FaCss3 />
            </span>
          </div>
          <div>
            <span>
              <IoLogoJavascript />
            </span>
            <span>
              <FaReact />
            </span>
          </div>
          <div>
            <span>
              <FaPython />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
