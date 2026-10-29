import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
const off = {
    id:1,
    name:'King Headphone',
    price:'300',
    img:'/billboard (1).png',
    off:'30% OFF',
    kind:'off'
}
function Billboard1(){
    const navigate = useNavigate();
    function handleBuy(off){
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const alreadyExists = cart.find(items => items.id === off.id);
    if(!alreadyExists){
      cart.push(off)
    }
    localStorage.setItem('cart',JSON.stringify(cart));
    navigate('/cart');
    };
    return(
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.7, ease: 'easeOut'}}
        className="bg-green-700 shadow-lg rounded-3xl mx-3 md:mx-15 my-15 text-white relative grid grid-cols-1 gap-15 md:grid-cols-2 lg:grid-cols-2">
            <div className="m-3 md:mx-5 md:my-1 lg:m-8 ">
                <p className="text-sm">30% OFF</p>
                <h1 className="font-bold text-5xl">FINE <br /> SMILE</h1>
                <div className="flex justify-between items-center">
                    <p className="font-thin text-gray-100">10 jan to 28 jan</p>
                    <button onClick={() => handleBuy(off)} className="cursor-pointer bg-white text-green-700 rounded-full px-4 py-1 mt-3 text-sm md:hidden">Shop</button>
                </div>
            </div>
            <div className="md:mx-5 md:my-1 lg:m-8 hidden md:block">
                <p className="font-bold text-lg">Air Solo Bass</p>
                <h2 className="text-4xl font-bold">Winter Sale</h2>
                <p className="w-70 md:w-70 lg:w-100 text-sm font-thind">Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Delectus amet</p>
                <button onClick={() => handleBuy(off)} className="cursor-pointer bg-white text-green-700 rounded-full px-4 py-1 mt-3 text-sm">Shop</button>
            </div>
            <img src="billboard (1).png" alt="" className="absolute w-30 top-[-20px] left-40 md:w-45 lg:w-50 md:top-[-20px] md:left-40 lg:left-60"/>
        </motion.div>
    )
}
export default Billboard1;