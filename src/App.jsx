import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/vans/Vans";
import VansDetails from "./pages/vans/VansDetails";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayaout from "./pages/Host/HostLayaout";
import Layout from "./component/Layout";
import VansHoast from "./pages/Host/vanshoast/VansHoast";
import VansHoastDetails from "./pages/Host/vanshoast/VansHoastDetails";
import Details from "./pages/Host/vanshoast/Details";
import Pricing from "./pages/Host/vanshoast/Pricing";
import Photos from "./pages/Host/vanshoast/Photos";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="host" element={<HostLayaout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vanshoast" element={<VansHoast />} />
            <Route path="vanshoast/:hoastID" element={<VansHoastDetails />}>
              <Route index element={<Details />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="about" element={<About />} />

          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VansDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
