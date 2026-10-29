import {Sun} from "lucide-react";
import SearchComponent from "./SearchComponent";
import { NavLink } from "react-router-dom";
import DropDowns from "./DropDowns";
import { FaCartShopping } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import Humbergur from "./Humbergur";
function NavBar({ night, handleNight, countBuy,setSearch,search }) {
  return (
    <div id="navBar" className="flex justify-between py-2 px-1 md:px-6">
      <div className="flex gap-5">
        <img src="logo.svg" alt="logo" className="w-8 md:w-10 rounded-full"/>
        <div className="flex gap-5 items-center hidden">
          <NavLink to={'/'} className={'text-sm hover:text-gray-500 active:scale-105 duration-200'}>Home</NavLink>
          <a href="about" className={'text-sm hover:text-gray-500 active:scale-105 duration-200'}>About</a>
          <a href="services" className={'text-sm hover:text-gray-500 active:scale-105 duration-200'}>Services</a>
          <a href="blog" className={'text-sm hover:text-gray-500 active:scale-105 duration-200'}>Blog</a>
          <DropDowns night={night}/>
        </div>
      </div>
      <div className=" flex gap-[1px] md:gap-4 items-center">
        <SearchComponent night={night} search={search} setSearch={setSearch}/>
        <NavLink to={'/cart'} className="relative p-3">
          <FaCartShopping className={`size-4 md:size-6`}/>
          {countBuy > 0 && (
            <div className="w-3 h-3 bg-red-500 text-white rounded-full absolute top-1 right-1 flex items-center justify-center text-xs">
              {countBuy}
            </div>
          )}
        </NavLink>
        {night  
              ? <Sun onClick={handleNight} className="size-4.5 md:size-6.5 cursor-pointer active:rotate-180 transition duration-500"/>
              : <FaMoon onClick={handleNight} className="size-3.5 md:size-5.5 cursor-pointer active:rotate-180 transition duration-500"/>
        }
        <NavLink to={'/loginForm'} className="bg-[#f42c37] text-[9px] md:text-[15px] text-white rounded-2xl px-1 md:px-2 cursor-pointer">Login</NavLink>
        <div className="md:hidden">
          <Humbergur night={night}/>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
