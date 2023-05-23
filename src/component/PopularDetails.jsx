import { Link, useParams } from "react-router-dom";

function PopularDetails() {
  const params = useParams();
  const userID = params.userID;
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-3xl font-bold">PopularDetails {userID}</h1>
      <button className="font-bold bg-yellow-400">
        <Link to="/">home</Link>
      </button>
    </div>
  );
}

export default PopularDetails;
