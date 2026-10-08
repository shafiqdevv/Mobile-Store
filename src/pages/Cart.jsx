import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
function Cart({setCountBuy}){
    const navigate = useNavigate();
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('cart')) || []
    );
    setCountBuy(cart.length);
    function removeProduct(id){
        const updateCart = cart.filter(product => product.id !== id);
        setCart(updateCart);
        localStorage.setItem('cart', JSON.stringify(updateCart))
    }
    return(
        <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.7, ease: 'easeOut'}}
        className="min-h-screen flex flex-col items-center pt-10">
            <BiLeftArrowAlt onClick={() => navigate(-1)} size={30} strokeWidth={1.2} className="cursor-pointer border rounded-full active:scale-97"/>
            <h1 className="text-3xl">{cart.length} Product in Shoping Cart</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {
                    cart.map(product => (
                        <div key={product.id} className={`${product.kind === 'off' && 'bg-green-500'} p-5 relative shadow-lg`}>
                            <img src={product.img} alt="" className="w-full h-30 object-cover rounded-lg"/>
                            <h2 className="font-bold mt-4">{product.name}</h2>
                            <p className="mt-2">${product.price}</p>
                            <p className="absolute right-[-20px] top-5 bg-red-500 text-white px-3 rounded-lg rotate-45">{product.off}</p>
                            <button onClick={() => removeProduct(product.id)} className="mt-5 px-5 py-1 bg-red-500 text-white rounded-lg">Remove</button>
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )
}
export default Cart;