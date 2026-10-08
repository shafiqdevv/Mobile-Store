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
        className="bg-[#f42c37] rounded-3xl mx-15 my-20 h-60 text-white relative flex justify-between">
            <div className="m-10">
                <p className="text-sm">30% OFF</p>
                <h1 className="font-bold text-5xl">FINE <br /> SMILE</h1>
                <p className="font-thin text-gray-100">10 jan to 28 jan</p>
            </div>
            <div className="m-10">
                <p className="font-bold text-lg">Air Solo Bass</p>
                <h2 className="text-4xl font-bold">Winter Sale</h2>
                <p className="w-70 text-sm font-thind">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus amet</p>
                <button onClick={() => handleBuy(off)} className="cursor-pointer bg-white text-[#f42c37] rounded-full px-4 py-1 mt-3 text-sm">Shop</button>
            </div>
            <img src="billboard (1).png" alt="" className="absolute w-50 top-[-15px] left-80"/>
        </motion.div>
    )
}
export default Billboard1;