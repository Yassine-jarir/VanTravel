import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="p-6 bg-">
        <ul className="flex w-full font-black gap-7">
          <li>
            <Link className="link-button" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
