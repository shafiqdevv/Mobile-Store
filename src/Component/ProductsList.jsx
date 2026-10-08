import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
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
        <button onClick={() => setCategory("watch")}     className={`${category === 'watch' ? 'bg-blue-600' : ' bg-red-600'}  px-4 py-1 cursor-pointer active:scale-102 text-sm rounded-full text-white`}>Watch</button>
        <button onClick={() => setCategory("headphone")} className={`${category === 'headphone' ? 'bg-blue-600' : ' bg-red-600'}  px-4 py-1 cursor-pointer active:scale-102 text-sm rounded-full text-white`}>Headphone</button>
        <button onClick={() => setCategory("console")}   className={`${category === 'console' ? 'bg-blue-600' : ' bg-red-600'}  px-4 py-1 cursor-pointer active:scale-102 text-sm rounded-full text-white`}>Console</button>
        <button onClick={() => setCategory("camera")}    className={`${category === 'camera' ? 'bg-blue-600' : ' bg-red-600'}  px-4 py-1 cursor-pointer active:scale-102 text-sm rounded-full text-white`}>Camera</button>
        <button onClick={() => setCategory("speaker")}   className={`${category === 'speaker' ? 'bg-blue-600' : ' bg-red-600'}  px-4 py-1 cursor-pointer active:scale-102 text-sm rounded-full text-white`}>Speaker</button>
        <NavLink  to={'/addForm'} className={`${night && 'text-white'} px-4 bg-blue-400 cursor-pointer active:scale-102 rounded-lg flex items-center text-black`}>Add Product</NavLink>
      </motion.div>
      {/* Products */}
      <motion.div
          
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <motion.div
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              whileHover={{y: -10, scale: 1}}
              transition={{opacity:{duration: 0.7}, y:{duration: 0.188}, ease: 'easeOut'}}
          key={product.id} className="rounded-xl p-3 shadow-lg bg[#f42c37]">
            <img src={product.img} alt={product.name} className="w-full h-30 object-cover rounded-lg"/>
            <div className="flex items-center gap-1 mt-2">
              <h2 className="font-bold text-sm">{product.name}</h2>
              <p className="text-sm font-bold">${product.price}</p>
            </div>
            <div className="flex gap-3 mt-2">
              <button onClick={() => handleBuy(product)} className="px-3 py-[1px] mt-5 active:scale-103  bg-orange-500 text-white rounded-lg">Buy</button>
              <button onClick={() => handleEdit(product)} className="px-3 py-[1px] mt-5 active:scale-103 bg-yellow-500 text-sm text-white rounded-lg">Edit</button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
export default ProductsList;