import {LucideShoppingCart,Moon,Sun,} from "lucide-react";
import SearchComponent from "./SearchComponent";
import { NavLink } from "react-router-dom";
import DropDowns from "./DropDowns";
function NavBar({ night, handleNight }) {
  return (
    <div id="hero" className="flex justify-between py-2 px-6">
      <div className="flex gap-5">
        <img src="logo.svg" alt="logo" className="w-10 rounded-full"/>
        <div className="flex gap-5 items-center">
          <NavLink to={'/'} className={'text-sm hover:text-gray-500 active:scale-105 duration-200'}>Home</NavLink>
          <a href="about" className={'text-sm hover:text-gray-500 active:scale-105 duration-200'}>About</a>
          <a href="services" className={'text-sm hover:text-gray-500 active:scale-105 duration-200'}>Services</a>
          <a href="blog" className={'text-sm hover:text-gray-500 active:scale-105 duration-200'}>Blog</a>
          <DropDowns night={night}/>
        </div>
      </div>
      <div className=" flex gap-5 items-center">
        <SearchComponent night={night}/>
        <NavLink to={'/shopingCart'}><LucideShoppingCart strokeWidth={1.3} size={20} className="cursor-pointer"/></NavLink>
        {night  
              ? <Sun size={20} onClick={handleNight} strokeWidth={1.3} className=" active:rotate-180 transition duration-500"/>
              : <Moon size={20} onClick={handleNight} strokeWidth={1.3} className="active:rotate-180 transition duration-500"/>
        }
        <NavLink to={'/loginForm'} className="bg-[#f42c37] text-sm text-white rounded-2xl px-2 cursor-pointer">Login</NavLink>
      </div>
    </div>
  );
}
export default NavBar;
