import {FaCaretDown} from "react-icons/fa";
import { NavLink } from "react-router-dom";
function DropDowns({night}){
    return(
        <div className="flex gap-6">
            <div className="relative group select-none">
            <h1 className="flex text-sm items-center mt-1">
              Filter
              <span>
                <FaCaretDown className="group-hover:rotate-180 duration-300" />
              </span>
            </h1>
            <div className={`absolute bg-gray-100 ${night && 'bg-gray-900'} hidden z-[999] group-hover:block w-60 peer cursor-pointer py-1 rounded-xl shadow-xl`}>
              <a href="#category" className={`flex rounded-lg m-1 py-1 px-4 hover:bg-red-200 ${night && 'hover:bg-red-800'} my-3`}>
                <h1 className='active:scale-102 transition duration-200'>Category</h1>
              </a>
              <a href="#productsList" className={`flex rounded-lg m-1 py-1 px-4 hover:bg-red-200 ${night && 'hover:bg-red-800'} my-3`}>
                <h1 className='active:scale-102 transition duration-200'>Products</h1>
              </a>
              <NavLink to={'/cart'} className={`flex rounded-lg m-1 py-1 px-4 hover:bg-red-200 ${night && 'hover:bg-red-800'} my-3`}>
                <h1 className='active:scale-102 transition duration-200'>Shoping Cart</h1>
              </NavLink>
              </div>
            </div>
        </div>
    )
}
export default DropDowns;