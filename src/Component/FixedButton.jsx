import { ArrowUpCircle } from "lucide-react";

function FixedButton(){
    return(
        <a href="#navBar">
            <ArrowUpCircle size={40} color="black" className="fixed hover:translate-y-[-3px] active:scale-110 hover:scale-103 duration-300 z-9999 absolute bg[#61d993] rounded-full top-105 left-250 shadow-2xl"/>
        </a>
    )
}
export default FixedButton;
// #61d993