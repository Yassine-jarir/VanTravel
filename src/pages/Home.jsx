import Popular from "../component/Popular";
import Veggie from "../component/veggie";

function Home() {
  return (
    <div>
      <i className="fa-solid fa-utensils mb-3 w-full"> Yassine Food</i>
      <Veggie />
      <Popular />
    </div>
  );
}

export default Home;
