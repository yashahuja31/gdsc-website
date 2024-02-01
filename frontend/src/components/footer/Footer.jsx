import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <img src="/footer/gdsc.png" alt="GDSC Logo" height={40} />
          <br />
          <p>
            GOOGLE DEVELOPER
            <br />
            STUDENTS CLUB ADGIPS
          </p>
        </div>
        <div className="footer-list">
          <a href="" className="tags">
            DEPARTMENTS
          </a>
          <a href="" className="tags">
            NEWSLETTERS
          </a>
          <a href="" className="tags">
            EVENTS
          </a>
          <a href="" className="tags">
            JOINCLUB
          </a>
          <a href="" className="tags">
            CONTRIBUTORS
          </a>
        </div>
      </div>
      <div>
        <div className="footer-icon">

        <a href={"/"}>
          <FontAwesomeIcon size="xl" icon={faInstagram} />
        </a>
        <a href={"/"}>
          <FontAwesomeIcon  size="xl" icon={faGithub} />
        </a>
        <a href={"/"}>
          <FontAwesomeIcon  size="xl" icon={faLinkedin} />
        </a>
        <a href={"/"}>
          <FontAwesomeIcon  size="xl" icon={faTwitter} />
        </a>
        <a href={"/"}>
          <FontAwesomeIcon  size="xl" icon={faFacebook} />
        </a>
        <a href={"/"}>
          <FontAwesomeIcon  size="xl" icon={faEnvelope} />
        </a>
        <a href={"/"}>
          <FontAwesomeIcon  size="xl" icon={faMedium} />
        </a>

        </div>
        <p>
          Made with&nbsp;
          <span style={{ color: "#5697C1" }}>&hearts;</span>
          &nbsp;by&nbsp;
          <span>G</span>
          <span>D</span>
          <span>S</span>
          <span>C</span>
          &nbsp;| ADGIPS
        </p>
      </div>
      <p>Copyright © 2024 gdscadgips.in</p>
    </footer>
  );
}
