import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/Vans">VansList</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Header;