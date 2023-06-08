import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import getapis from "../../API/Api";
export default function Vans() {
  const [searchparams, setsearchparams] = useSearchParams();
  setsearchparams;
  const para = searchparams.get("type");

  const [vans, setVans] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  const [error, seterror] = React.useState(false);

  React.useEffect(() => {
    async function validapi() {
      setloading(true);
      try {
        const data = await getapis();
        setVans(data);
      } catch (error) {
        seterror(error);
      } finally {
        setloading(false);
      }
    }
    validapi();
  }, []);

  const filtervans = para
    ? vans.filter((van) => van.type.toLowerCase() === para)
    : vans;
  const vanElements = filtervans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={van.id} state={{ search: searchparams.toString(), type: para }}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  if (loading) {
    return <h1 className="font-black text-3xl"> ...Loading</h1>;
  }
  if (error) {
    return <h1 className="font-black text-3xl"> there is an error {error}</h1>;
  }
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="flex gap-4">
        <Link
          to="?type=simple"
          className={`van-type simple ${para === "simple" ? "selected" : null}`}
        >
          Simple
        </Link>
        <Link
          to="?type=luxury"
          className={`van-type luxury ${para === "luxury" ? "selected" : null}`}
        >
          luxury
        </Link>
        <Link
          to="?type=rugged"
          className={`van-type rugged ${
            para === "rugged" ? "selected" : null
          } `}
        >
          rugged
        </Link>
        {para ? (
          <Link to="" className="van-type rugged">
            clear
          </Link>
        ) : null}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
