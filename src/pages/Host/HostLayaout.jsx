import { NavLink, Outlet } from "react-router-dom";

function HostLayaout() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          dashboard
        </NavLink>

        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          income
        </NavLink>

        <NavLink
          to="vanshoast"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          vans
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          reviews
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
}

export default HostLayaout;
