import {FaCaretDown} from "react-icons/fa";
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
              <a href="#BestSellerProducts" className={`flex rounded-lg m-1 py-1 px-4 hover:bg-red-200 ${night && 'hover:bg-red-800'} my-3`}>
                <h1 className='active:scale-102 transition duration-200'>Best Seller Products</h1>
              </a>
              <a href="#NewlyAddedProducts" className={`flex rounded-lg m-1 py-1 px-4 hover:bg-red-200 ${night && 'hover:bg-red-800'} my-3`}>
                <h1 className='active:scale-102 transition duration-200'>Newly Added Products</h1>
              </a>
              <a href="#VIPProducts" className={`flex rounded-lg m-1 py-1 px-4 hover:bg-red-200 ${night && 'hover:bg-red-800'} my-3`}>
                <h1 className='active:scale-102 transition duration-200'>VIP Products</h1>
              </a>
              </div>
            </div>
        </div>
    )
}
export default DropDowns;