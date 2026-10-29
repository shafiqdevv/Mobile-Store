import { Search } from "lucide-react";
import products from "../data/Products";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
function SearchComponent({night, search, setSearch}){
    const [isTypeing, setIsTypeing] = useState(false);
    const searchRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event){
            // if(searchRef.current && !searchRef.current.contains(event.target)){
                setIsTypeing(false)
            // }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, []);
    const searchResults = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    function handleChange(e){
        setSearch(e.target.value);
        setIsTypeing(true)
    }
    function handleClick(){
        setIsTypeing(false);
        setSearch('')
    }
    return(
        <div ref={searchRef}>
            <div className="flex items-center group w-0 relative">
                <input value={search}
                    onChange={handleChange} type="text" className={`${night ? 'md:hover:border-white' : 'md:hover:border-black'} 
                    text-sm rounded-full px-4 z-2 hover:border-2 focus:border-2 border-2
                    border-transparent hover:cursor-pointer focus:cursor-text focus:w-37 md:focus:w-50 lg:focus:w-60
                    duration-500 w-0 md:group-hover:w-50 lg:group-hover:w-60 right-0 absolute`} 
                placeholder="search products..."/>
                <Search className="size-4 md:size-6 absolute right-1.5 z-1 cursor-pointer"/>
            </div>
            {search.length > 0 && (
                <div className={`absolute left-12 md:right-50 z-50 mt-3 h-50 w-50 overflow-hidden rounded-lg shadow-xl bg-gray-100 ${night && 'bg-gray-900'}`}>
                {
                    searchResults.map(searchResult => (
                    <div className="relative group select-none">
                        <a onClick={handleClick} href="#productsList" className={`block text-sm m-[4px] w-full hover:bg-red-200 p-1 ${night && 'hover:bg-red-800'}`}>
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