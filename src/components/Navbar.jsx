import { FcManager } from "react-icons/fc";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="bg-gradient-to-l from-cyan-400 to-indigo-600  p-3">
      <div className="logo flex">
        <span className="">
          <FcManager className="w-10 h-7 cursor-pointer" />
        </span>
        <h1 className="text-xl cursor-pointer text-zinc-200">TaskManger</h1>
        <div className="justify-end w-[85vw] flex ">
          <ul className="flex gap-6 text-violet-600 text-lg">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">My Tasks</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
