import React from "react";
import { Link } from "react-router-dom";
import "../../../server";
export default function HostVans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const hostVansEls = vans.map((van) => (
    <Link
      to={`/host/vanshoast/${van.id}`}
      key={van.id}
      className="host-van-link-wrapper"
    >
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {vans.length > 0 ? (
          <section>{hostVansEls}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// let URL_API = "/api/vans";

// function VansHoast() {
//   let [vans, setvans] = useState([]);
//   useEffect(() => {
//     fetch(URL_API)
//       .then((res) => res.json())
//       .then((data) => setvans(data.vans));
//   }, []);

//   const listvans = vans.map((van) => {
//     return (
//       <>
//         <Link to={`/host/vanshoast/${van.id}`}>
//           <div
//             key={van.id}
//             className="flex gap-3 m-3 p-3 vanscolor rounded-2xl cursor-pointer"
//           >
//             <img className="w-[25%]" src={van.imageUrl} alt={van.id} />
//             <div className="van-info text-xs">
//               <h3>{van.name}</h3>
//               <p>
//                 ${van.price}
//                 <span>/day</span>
//               </p>
//             </div>
//           </div>
//         </Link>
//       </>
//     );
//   });
//   return (
//     <div>
//       <h1>Your list Vans</h1>
//       <div className="flex gap-6 flex-col">{listvans}</div>
//     </div>
//   );
// }

// export default VansHoast;
