import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductsList({night, filteredProducts, setCategory}) {
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
    <div className="p-8">
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        <button onClick={() => setCategory("all")} className={`${night && 'text-white'} px-4 shadow-[0_0_5px_0.1px] py-[1px] cursor-pointer active:scale-102 text-sm rounded-full  text-black"`}>All</button>
        <button onClick={() => setCategory("earpoad")}   className={`${night && 'text-white'} px-4 shadow-[0_0_5px_0.1px] py-[1px] cursor-pointer active:scale-102 text-sm rounded-full  text-black"`}>Earpoad</button>
        <button onClick={() => setCategory("watch")}     className={`${night && 'text-white'} px-4 shadow-[0_0_5px_0.1px] py-[1px] cursor-pointer active:scale-102 text-sm rounded-full  text-black"`}>Watch</button>
        <button onClick={() => setCategory("headphone")} className={`${night && 'text-white'} px-4 shadow-[0_0_5px_0.1px] py-[1px] cursor-pointer active:scale-102 text-sm rounded-full  text-black"`}>Headphone</button>
        <button onClick={() => setCategory("console")}   className={`${night && 'text-white'} px-4 shadow-[0_0_5px_0.1px] py-[1px] cursor-pointer active:scale-102 text-sm rounded-full  text-black"`}>Console</button>
        <button onClick={() => setCategory("camera")}    className={`${night && 'text-white'} px-4 shadow-[0_0_5px_0.1px] py-[1px] cursor-pointer active:scale-102 text-sm rounded-full  text-black"`}>Camera</button>
        <button onClick={() => setCategory("speaker")}   className={`${night && 'text-white'} px-4 shadow-[0_0_5px_0.1px] py-[1px] cursor-pointer active:scale-102 text-sm rounded-full  text-black"`}>Speaker</button>
      </div>
      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="rounded-xl p-5 shadow-lg">
            <img src={product.img} alt={product.name} className="w-full h-35 object-cover rounded-lg"/>
            <div className="flex items-center gap-4 mt-2">
              <h2 className="font-bold">{product.name}</h2>
              <p className="text-sm font-bold">${product.price}</p>
            </div>
            <div className="flex gap-3 mt-2">
              <button onClick={() => handleBuy(product)} className="px-3 py-[1px] mt-5 active:scale-103 bg-green-500 text-white rounded-lg">Buy</button>
              <button onClick={() => handleEdit(product)} className="px-3 py-[1px] mt-5 active:scale-103 bg-blue-500 text-sm text-white rounded-lg">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;