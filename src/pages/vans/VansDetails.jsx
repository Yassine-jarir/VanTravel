import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "../../server";

function VansDetails() {
  const { id } = useParams();

  let [van, setvan] = useState(null);
  const local = useLocation();
  console.log(local);
  console.log(local.state);

  const URL_API = `/api/vans/${id}`;
  useEffect(() => {
    fetch(URL_API)
      .then((res) => res.json())
      .then((data) => setvan(data.vans));
  }, [id]);

  return (
    <div className="van-detail-container">
      <Link
        to={local.state ? `..?${local.state.search}` : ".."}
        relative="path"
        className="back-button"
      >
        &larr;{" "}
        <span className="font-black">
          Back to {local.state.type ? local.state.type : "all"} vans
        </span>
      </Link>
      {van ? (
        <div className="van-detail md:w-[41%] md:flex m-auto text-center justify-center">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected m-auto`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default VansDetails;
