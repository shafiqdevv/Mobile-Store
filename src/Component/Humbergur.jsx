import { useState } from "react";
import DropDowns from "./DropDowns";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
function Humbergur({ night }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      {isShow ? (
        <motion.div
            initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} transition={{type:"tween"}}
        className={`flex flex-col absolute z-2 right-0 top-0 w-40 h-screen gap-5 items-end ${night ? 'bg-gray-700' : ' bg-white'} overflow-hidden`}>
          <X onClick={() => setIsShow(false)} className="mt-4 ml-2 cursor-pointer"/>
          <div className="flex flex-col gap-2">
            <NavLink to={"/"}       onClick={() => setIsShow(false)} className={`w-ful cursor-pointer text-end w-50 p-2 ${night ? "hover:bg-white hover:text-gray-900 active:bg-white" : "hover:bg-gray-900 hover:text-white active:bg-gray-900"}`}  >Home</NavLink>
            <a href="about"         onClick={() => setIsShow(false)} className={`w-ful cursor-pointer text-end w-50 p-2 ${night ? "hover:bg-white hover:text-gray-900 active:bg-white" : "hover:bg-gray-900 hover:text-white active:bg-gray-900"}`}>About</a>
            <a href="services"      onClick={() => setIsShow(false)} className={`w-ful cursor-pointer text-end w-50 p-2 ${night ? "hover:bg-white hover:text-gray-900 active:bg-white" : "hover:bg-gray-900 hover:text-white active:bg-gray-900"}`}>Services</a>
            <a href="blog"          onClick={() => setIsShow(false)} className={`w-ful cursor-pointer text-end w-50 p-2 ${night ? "hover:bg-white hover:text-gray-900 active:bg-white" : "hover:bg-gray-900 hover:text-white active:bg-gray-900"}`}>Blog</a>
            <a href="#category"     onClick={() => setIsShow(false)} className={`w-ful cursor-pointer text-end w-50 p-2 ${night ? "hover:bg-white hover:text-gray-900 active:bg-white" : "hover:bg-gray-900 hover:text-white active:bg-gray-900"}`}>Category</a>
            <a href="#productsList" onClick={() => setIsShow(false)} className={`w-ful cursor-pointer text-end w-50 p-2 ${night ? "hover:bg-white hover:text-gray-900 active:bg-white" : "hover:bg-gray-900 hover:text-white active:bg-gray-900"}`}>Products</a>
            <NavLink to={"/cart"}   onClick={() => setIsShow(false)} className={`w-ful cursor-pointer text-end w-50 p-2 ${night ? "hover:bg-white hover:text-gray-900 active:bg-white" : "hover:bg-gray-900 hover:text-white active:bg-gray-900"}`}>Shoping Cart</NavLink>
          </div>
        </motion.div>
      ) : (
        <PiDotsThreeOutlineVerticalFill onClick={() => setIsShow(true)} className="cursor-pointer"/>
      )}
    </div>
  );
}
export default Humbergur;
