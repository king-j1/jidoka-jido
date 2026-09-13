import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const linkStyle = ({ isActive }) => (isActive ? "active" : "");

  return (
    <header className={`site-header ${pathname !== "/" ? "site-header-solid" : ""}`}>
      <nav className="page-width nav-inner">
        <Link to="/" className="brand-mark">GG<span>.</span></Link>
        <div className="nav-caption">Godwin Galley / Judo</div>
        <div className="nav-links">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>

          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
        </div>
        <Link to="/contact" className="nav-cta">Enquire <span>↗</span></Link>
      </nav>
    </header>
  );
}
