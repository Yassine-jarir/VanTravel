import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="font-black m-auto block ">404 Error page not found </h1>
      <Link to="/" className="link-button">
        back home page
      </Link>
    </div>
  );
}

export default NotFound;
