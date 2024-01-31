import "./Header.css";

export default function Header() {
  return (
    <nav className="full-width-nav">
      <div className="nav-items-container">
        <div className="gdscContainer">
          <div className="logo">
            <img src="/footer/gdsc.png" alt="gdsc"/>
          </div>
          <div className="club">
            <span className="club-name">google developer students club</span>
            <span className="clg-name">adgips</span>
          </div>
        </div>
        <div className="nav-menu-links">
          <a href="/">home</a>
          <a href="/events">events</a>
          <a href="/team">team</a>
        </div>
        <div className="button-container">
          <a href="#" className="btn">
            contact us
          </a>
          <a href="#" className="btn">
            join community
          </a>
        </div>
      </div>
    </nav>
  );
}
