import { useState } from "react";
import { motion } from "motion/react";
import GoBack from "../Component/GoBack";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { IoIosRemoveCircle } from "react-icons/io";
function Cart({setCountBuy, handleEdit, night}){
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
        <div
           
        className="min-h-screen flex flex-col items-center pt-10">
            <GoBack/>
            <h1 className="text-3xl">{cart.length} Product in Shoping Cart</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {
                    cart.map(product => (
                        <motion.div
                             initial={{opacity: 0, y: 50}}
                             whileInView={{opacity: 1, y: 0}}
                             whileHover={{y: -5, scale: 1}}
                             transition={{opacity:{duration: 0.7}, y:{duration: 0.188}, ease: 'easeOut'}}
                        key={product.id} className={`p-5 flex flex-col gap-2 relative rounded-xl ${night ?"shadow-lg shadow-black" : 'shadow-lg'}`}>
                            <img src={product.img} alt="" className="w-full h-30 object-cover rounded-lg"/>
                            <h2 className="font-bold mt-4">{product.name}</h2>
                            <div>
                                <strong className="mt-2 text-green-600 text-lg">${product.price} </strong>
                                <del className="text-sm text-red-600">$500</del>
                            </div>
                            <p className="absolute right-[-20px] top-5 bg-red-500 text-white px-3 rounded-lg rotate-45">{product.off}</p>
                            <AiFillEdit onClick={() => handleEdit(product)}    size={20} className="cursor-pointer hover:scale-110 transition duration-200 hover:text-blue-600"/>
                            <IoIosRemoveCircle onClick={() => removeProduct(product.id)} size={20} className="cursor-pointer hover:scale-110 transition duration-200 hover:text-red-600"/>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}
export default Cart;