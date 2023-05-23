import { Link, Outlet } from "react-router-dom";

function Popularlayout() {
  return (
    <div className="flex flex-col text-2xl">
      <small>
        <Link to="1">user 9 </Link>
      </small>
      <small>
        <Link to="2">user 4 </Link>
      </small>
      <small>
        <Link to="3">user 5 </Link>
      </small>
      <small>
        <Link to="4">user 2 </Link>
      </small>
      <Outlet />
    </div>
  );
}

export default Popularlayout;
