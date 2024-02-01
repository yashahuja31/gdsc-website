import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [navStatus, setNavStatus] = useState(false);
  const toggleNav = () => {
    setNavStatus(!navStatus);
    if (!navStatus && window.innerWidth <= 850) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  return (
    <nav>
      <div className="nav-flex">
        <div>
          <Link to="/" className="nav-logo">
            <img src="/footer/gdsc.png" alt="GDSC Logo" />
            <span>
              Google Developer Student <br />
              ADGIPS
            </span>
          </Link>
        </div>
        <div className={navStatus ? "nav-close" : "nav-open"}>
          <Link onClick={toggleNav} to="/">Home</Link>
          <Link  onClick={toggleNav} to="/events">Event</Link>
          <Link onClick={toggleNav}  to="/team">Team</Link>
          <a onClick={toggleNav}  className="links">Contact Us</a>
          <a  onClick={toggleNav} className="links">Join Community</a>
        </div>
        <div>
          <a className="nav-bt1">Contact Us</a>
          <a className="nav-bt2">Join Community</a>
        </div>
        <a onClick={toggleNav} className="bars">
          <FontAwesomeIcon size="2xl" icon={faBars} />
        </a>
      </div>
    </nav>
  );
}
