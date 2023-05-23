import { Link, Outlet } from "react-router-dom";
import Contactmembers from "../component/Contactmembers";

function Contact() {
  return (
    <div className="flex w-full h-[89vh]">
      <div className="flex flex-col flex-1 bg-teal-950 p-2">
        <p className="text-4xl font-bold text-zinc-400">Contact</p>
        <ul className="flex flex-col mt-[40px] w-full font-black text-white gap-10 ">
          <li>
            <Link to={"/contact/yassine"}>YAssine</Link>
          </li>
          <li>
            <Link to={"/contact/yassine"}>krimo</Link>
          </li>
          <li>
            <Link to={"/contact/yassine"}>dawya</Link>
          </li>
        </ul>
      </div>
      <div className="flex-[3]">
        <Outlet />
      </div>
    </div>
  );
}

export default Contact;
