import { Search } from "lucide-react";
import products from "../data/Products";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function SearchComponent({night, search, setSearch}){
    const [isFocus, setIsFocus] = useState(false)
    const searchResults = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    function handleFocus(){
        setIsFocus(true);
        console.log('focused')
    }
    return(
        <div className="">
            <div className="flex items-center group w-0 relative">
                <input onFocus={handleFocus} value={search} onChange={(e) => setSearch(e.target.value)} type="text" className={`${night ? 'hover:border-white' : 'hover:border-black'} text-sm rounded-full px-4 z-2 hover:border-2 focus:border-2 border-2 border-transparent hover:cursor-pointer focus:cursor-text focus:w-60 duration-500 w-0 group-hover:w-60 right-0 absolute`} placeholder="search products..."/>
                <Search size={20} className="absolute right-1.5 z-1 cursor-pointer"/>
            </div>
            {search.length > 0 && (
                <div className={`absolute right-50 z-50 mt-3 h-50 w-50 overflow-hidden rounded-lg shadow-xl bg-gray-100 ${night && 'bg-gray-900'}`}>
                {
                    searchResults.map(searchResult => (
                    <div className="relative group select-none">
                        <a href="#productsList" className={`text-sm m-[4px] w-full hover:bg-red-200 p-1 ${night && 'hover:bg-red-800'}`}>
                          {searchResult.name}
                        </a>
                    </div>
                ))
                }
            </div>
            )}
        </div>
    )
}
export default SearchComponent;