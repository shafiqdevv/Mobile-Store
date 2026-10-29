import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { AiFillEdit } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import CategoryBTN from "./CategoryBTN";
function ProductsList({night, filteredProducts, setCategory, handleEdit}) {
  const navigate = useNavigate();
  function handleBuy(product){
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const alreadyExists = cart.find(items => items.id === product.id);
    if(!alreadyExists){
      cart.push(product)
    }
    localStorage.setItem('cart',JSON.stringify(cart));
    navigate('/cart');
  };
  return (
    <div id="productsList" className="p-8">
      {/* Filter Buttons */}
      <CategoryBTN setCategory={setCategory} night={night}/>
      {/* Products */}
      <motion.div
          
      className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5 md:gap-6 mt-5">
        {filteredProducts.map((product) => (
          <motion.div
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              whileHover={{y: -5, scale: 1}}
              transition={{opacity:{duration: 0.7}, y:{duration: 0.188}, ease: 'easeOut'}}
          key={product.id} className={`rounded-xl p-3 flex flex-col gap-5 ${night ?"shadow-lg shadow-black" : 'shadow-lg'}`}>
            <img src={product.img} alt={product.name} className="w-full h-30 object-cover rounded-lg"/>
            <div className="flex flex-col items-center gap-1 mt-2">
              <h2 className="font-bold text-sm">{product.name}</h2>
              <strong className="text-sm font-extrabold text-green-500">${product.price}</strong>
              <del className="text-xs text-red-500">$400</del>
            </div>
            <div className="flex gap-3 bg-red500  mt-2">
              <AiFillEdit onClick={() => handleEdit(product)}    size={20} className="hover:text-blue-600 cursor-pointer hover:scale-110 transition duration-200"/>
              <FaCartShopping onClick={() => handleBuy(product)} size={20} className="hover:text-green-600 cursor-pointer hover:scale-110 transition duration-200"/>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
export default ProductsList;