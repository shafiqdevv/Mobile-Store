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
      <div className="flex flex-wrap gap-3 mb-8">
        <button onClick={() => setCategory("all")} className="px-5 py-2 bg-gray-800 text-white rounded-lg">All</button>
        <button onClick={() => setCategory("earpoad")} className="px-5 py-2 bg-blue-500 text-white rounded-lg">Earpoad</button>
        <button onClick={() => setCategory("watch")} className="px-5 py-2 bg-blue-500 text-white rounded-lg">Watch</button>
        <button onClick={() => setCategory("headphone")} className="px-5 py-2 bg-blue-500 text-white rounded-lg">Headphone</button>
        <button onClick={() => setCategory("console")} className="px-5 py-2 bg-blue-500 text-white rounded-lg">Console</button>
        <button onClick={() => setCategory("camera")} className="px-5 py-2 bg-blue-500 text-white rounded-lg" >Camera</button>
        <button onClick={() => setCategory("speaker")} className="px-5 py-2 bg-blue-500 text-white rounded-lg" >Speaker</button>
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
              <button onClick={() => handleBuy(product)} className="px-3 py-[1px] bg-green-500 text-white rounded-lg">Buy</button>
              <button onClick={() => handleEdit(product)} className="px-3 py-[1px] bg-blue-500 text-white rounded-lg">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;