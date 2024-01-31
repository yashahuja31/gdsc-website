import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export default function Header() {
  const [navStatus, setNavStatus] = useState(false);
  const toggleNav = () => {
    setNavStatus(!navStatus);
    if (!navStatus) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  return (
    <nav>
      <div className="nav-flex">
        <div>
          <a href="/" className="nav-logo">
            <img src="/footer/gdsc.png" alt="GDSC Logo" />
            <span>
              Google Developer Student <br />
              ADGIPS
            </span>
          </a>
        </div>
        <div className={navStatus ? "nav-close" : "nav-open"}>
          <a href="/">Home</a>
          <a href="/events">Event</a>
          <a href="/team">Team</a>
          <a className="links">Contact Us</a>
          <a className="links">Join Community</a>
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
