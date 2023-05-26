// import { NavLink, Outlet } from "react-router-dom";

// function HostLayaout() {
//   return (
//     <>
//       <nav className="host-nav">
//         <NavLink
//           to="/host"
//           className={({ isActive }) => (isActive ? "navlinks-host" : null)}
//         >
//           dashboard
//         </NavLink>

//         <NavLink
//           to="/host/income"
//           className={({ isActive }) => (isActive ? "navlinks-host" : null)}
//         >
//           income
//         </NavLink>

//         <NavLink
//           to="/host/reviews"
//           className={({ isActive }) => (isActive ? "navlinks-host" : null)}
//         >
//           reviews
//         </NavLink>
//       </nav>

//       <Outlet />
//     </>
//   );
// }
import React from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
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
// export default HostLayaout;
