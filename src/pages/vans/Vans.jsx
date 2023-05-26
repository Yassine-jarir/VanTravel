// import { useEffect, useState } from "react";
// import "../../server";
// import { Link } from "react-router-dom";

// const URL_API = "/api/vans";

// function Vans() {
//   let [listData, setlistData] = useState([]);

//   useEffect(() => {
//     fetch(URL_API)
//       .then((res) => res.json())
//       .then((data) => setlistData(data.vans));
//   }, []);

//   const vanElements = listData.map((van) => (
//     <div
//       key={van.id}
//       className="van-tile text-center flex justify-center items-center"
//     >
//       <Link to={`/vans/${van.id}`}>
//         <div className="w-64 m-auto block">
//           <img src={van.imageUrl} />
//         </div>
//         <div className="van-info flex flex-col w-[350px]">
//           <h2>{van.name}</h2>
//           <span>
//             ${van.price}
//             <span>/day</span>
//           </span>
//         </div>
//         <i className={`van-type ${van.type} selected`}>{van.type}</i>
//       </Link>
//     </div>
//   ));

//   return (
//     <div className="flex flex-wrap w-[100%]">
//       <h1>Explore our van options</h1>
//       <div className="van-list  flex flex-wrap w-[100%]  gap-[24px] justify-center items-center h-[405px]">
//         {vanElements}
//       </div>
//     </div>
//   );
// }
// export default Vans;

import React from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
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

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
