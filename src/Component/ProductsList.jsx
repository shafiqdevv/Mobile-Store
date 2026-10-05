import { useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/Products";

function ProductsList() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const filteredProducts =
    category === "all"
      ? products
      : products.filter(
          (product) => product.category === category
        );
  const handleEdit = (product) => {
    navigate(`/edit-product/${product.id}`);
  };
  const handleBuy = (product) => {
    navigate(`/buy/${product.id}`);
  };
  return (
    <div className="p-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        <button onClick={() => setCategory("all")} className="      px-4 shadow-[0_0_5px_0.1px] py-[1px] cursor-pointer active:scale-102 text-sm rounded-full  text-black">All</button>
        <button onClick={() => setCategory("earpoad")} className="  px-4 shadow-[0_0_5px_0.1px] py-[1px] cursor-pointer active:scale-102 text-sm rounded-full  text-black">Earpoad</button>
        <button onClick={() => setCategory("watch")} className="    px-4 shadow-[0_0_5px_0.1px] py-[1px] cursor-pointer active:scale-102 text-sm rounded-full  text-black">Watch</button>
        <button onClick={() => setCategory("headphone")} className="px-4 shadow-[0_0_5px_0.1px] py-[1px] cursor-pointer active:scale-102 text-sm rounded-full  text-black">Headphone</button>
        <button onClick={() => setCategory("console")} className="  px-4 shadow-[0_0_5px_0.1px] py-[1px] cursor-pointer active:scale-102 text-sm rounded-full  text-black">Console</button>
        <button onClick={() => setCategory("camera")} className="   px-4 shadow-[0_0_5px_0.1px] py-[1px] cursor-pointer active:scale-102 text-sm rounded-full  text-black" >Camera</button>
        <button onClick={() => setCategory("speaker")} className="  px-4 shadow-[0_0_5px_0.1px] py-[1px] cursor-pointer active:scale-102 text-sm rounded-full  text-black" >Speaker</button>
      </div>
      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="rounded-xl p-5">
            <img src={product.img} alt={product.name} className="w-full h-35 object-cover rounded-lg"/>
            <div className="flex items-center gap-4 mt-2">
              <h2 className="text- font-bold">{product.name}</h2>
              <p className="text-sm font-bold">${product.price}</p>
            </div>
            <div className="flex gap-3 mt-2">
              <button onClick={() => handleBuy(product)} className="px-3 py-[1px] active:scale-103 bg-green-500 text-white rounded-lg">Buy</button>
              <button onClick={() => handleEdit(product)} className="px-3 py-[1px] active:scale-103 bg-blue-500 text-sm text-white rounded-lg">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;