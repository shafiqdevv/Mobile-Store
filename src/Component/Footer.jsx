import { BsInstagram } from "react-icons/bs";
import { CiMobile1 } from "react-icons/ci";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Footer({night}) {
  return(
    <div>
      <div className={`flex justify-between px-15 bg-gray-200 ${night && 'bg-gray-800'}`}>
        <img src="logo (1).svg" alt="logo" className="w-15"/>
        <img src="logo (2).svg" alt="logo" className="w-15"/>
        <img src="logo (3).svg" alt="logo" className="w-15"/>
        <img src="logo (4).svg" alt="logo" className="w-15"/>
        <img src="logo (6).svg" alt="logo" className="w-15"/>
      </div>
      <div className="flex justify-between px-15 h-70 mt-5">
        <div className="max-w-70">
          <h1 className="text-red-600 font-bold text-2xl">ESHOP</h1>
          <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus in vero cupiditate nulla! Vero delectus molestias laborum odio off</p>
          <p className="mt-5">Made by Coder Freinds</p>
          <button className="bg-red-600 px-5 py-[2px] rounded-full text-white text-sm mt-2 hover:scale-97 active:scale-103 duration-200 cursor-pointer">Visit our website</button>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">Important Links</h1>
            <NavLink to={'/'} className={'text-sm hover:text-gray-500 active:scale-105 duration-200'}>Home</NavLink>
            <NavLink to={'/'} className={'text-sm hover:text-gray-500 active:scale-105 duration-200'}>About</NavLink>
            <NavLink to={'/'} className={'text-sm hover:text-gray-500 active:scale-105 duration-200'}>Contact</NavLink>
            <NavLink to={'/'} className={'text-sm hover:text-gray-500 active:scale-105 duration-200'}>Blog</NavLink>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Links</h1>
            <NavLink to={'/'} className={'text-sm hover:text-gray-500 active:scale-105 duration-200'}>Home</NavLink>
            <NavLink to={'/'} className={'text-sm hover:text-gray-500 active:scale-105 duration-200'}>About</NavLink>
            <NavLink to={'/'} className={'text-sm hover:text-gray-500 active:scale-105 duration-200'}>Contact</NavLink>
            <NavLink to={'/'} className={'text-sm hover:text-gray-500 active:scale-105 duration-200'}>Blog</NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-10">
          <div className="flex gap-5">
            <FaLinkedin size={30}  className="hover:scale-97 active:scale-103 duration-200 cursor-pointer"/>
            <BsInstagram size={30} className="hover:scale-97 active:scale-103 duration-200 cursor-pointer"/>
            <FaFacebook size={30}  className="hover:scale-97 active:scale-103 duration-200 cursor-pointer"/>
            <FaGithub size={30}    className="hover:scale-97 active:scale-103 duration-200 cursor-pointer"/>
            <FaWhatsapp size={30}  className="hover:scale-97 active:scale-103 duration-200 cursor-pointer"/>
          </div>
          <p className="flex items-center "><CiMobile1 size={30}/>+93 77 777 777 7</p>
        </div>
      </div>
    </div>
  )
}
export default Footer;