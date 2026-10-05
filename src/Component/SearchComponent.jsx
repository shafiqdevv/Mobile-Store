import { Search } from "lucide-react";

function SearchComponent({night}){
    return(
        <div className="flex items-center group w-0 relative">
            <input type="text" className={`${night ? 'hover:border-white' : 'hover:border-black'} text-sm rounded-full px-4 z-2 hover:border-2 focus:border-2 border-2 border-transparent hover:cursor-pointer focus:cursor-text focus:w-60 duration-500 w-0 group-hover:w-60 right-0 absolute`} placeholder="search products..."/>
            <Search size={20} strokeWidth={1.3} className="absolute right-1.5 z-1 cursor-pointer"/>
        </div>
    )
}
export default SearchComponent;