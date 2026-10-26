import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { AiFillEdit } from "react-icons/ai";
import { FaCameraRetro, FaCartShopping } from "react-icons/fa6";
import { GiWatch } from "react-icons/gi";
import { BiHeadphone } from "react-icons/bi";
import { IoGameController } from "react-icons/io5";
import { BsSpeakerFill } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";
function ProductsList({night, filteredProducts, setCategory, category}) {
  const navigate = useNavigate();
  const handleEdit = (product) => {
    navigate(`/edit-product/${product.id}`);
  };
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
      <motion.div
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.7, ease: 'easeOut'}}
      className="flex flex-wrap gap-3 justify-center mb-8">
        <button onClick={() => setCategory("all")} className={`${category === 'all' ? 'bg-blue-600' : ' bg-red-600'} px-4 py-1 cursor-pointer active:scale-102 text-sm rounded-full text-white`}>All</button>
        <button onClick={() => setCategory("earpoad")}   className={`${category === 'earpoad' ? 'bg-blue-600' : ' bg-red-600'}  px-4 py-1 cursor-pointer active:scale-102 text-sm rounded-full text-white`}>Earpoad</button>
        <GiWatch size={40} color="black" onClick={() => setCategory("watch")}     className={`${category === 'watch' ? 'bg-blue-600' : ' bg-gray-400'}  px4 py-1 cursor-pointer active:scale-102 text-sm rounded-full text-white`}>Watch</GiWatch>
        
        <BiHeadphone size={40} color="black" onClick={() => setCategory("headphone")} className={`${category === 'headphone' ? 'bg-blue-600' : ' bg-gray-400'}  px4 py-1 cursor-pointer active:scale-102 text-sm rounded-full text-white`}>Headphone</BiHeadphone>
        <IoGameController size={40} color="black" onClick={() => setCategory("console")}   className={`${category === 'console' ? 'bg-blue-600' : ' bg-gray-400'}  px4 py-1 cursor-pointer active:scale-102 text-sm rounded-full text-white`}>Console</IoGameController>
        <FaCameraRetro size={40} color="black" onClick={() => setCategory("camera")}    className={`${category === 'camera' ? 'bg-blue-600' : ' bg-gray-400'}  px4 py-1 cursor-pointer active:scale-102 text-sm rounded-full text-white`}>Camera</FaCameraRetro>
        <BsSpeakerFill size={40} color="black" onClick={() => setCategory("speaker")}   className={`${category === 'speaker' ? 'bg-blue-600' : ' bg-gray-400'}  px4 py-1 cursor-pointer active:scale-102 text-sm rounded-full text-white`}>Speaker</BsSpeakerFill>
        <NavLink  to={'/addForm'} className={`${night && 'text-white'} bg-blue-400 cursor-pointer active:scale-102 rounded-lg flex items-center text-black text-sm`}><IoIosAddCircle size/> Add Product</NavLink>
      </motion.div>
      {/* Products */}
      <motion.div
          
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <motion.div
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              whileHover={{y: -5, scale: 1}}
              transition={{opacity:{duration: 0.7}, y:{duration: 0.188}, ease: 'easeOut'}}
          key={product.id} className="rounded-xl p-3 shadow-lg flex flex-col gap-5">
            <img src={product.img} alt={product.name} className="w-full h-30 object-cover rounded-lg"/>
            <div className="flex items-center gap-1 mt-2">
              <h2 className="font-bold text-sm">{product.name}</h2>
              <p className="text-sm font-bold">${product.price}</p>
            </div>
            <div className="flex gap-3 bg-red500  mt-2">
              <AiFillEdit onClick={() => handleEdit(product)}    size={20} className="cursor-pointer hover:scale-110 transition duration-200"/>
              <FaCartShopping onClick={() => handleBuy(product)} size={20} className="cursor-pointer hover:scale-110 transition duration-200"/>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
export default ProductsList;