import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../data/Products";
import { BiLeftArrowAlt } from "react-icons/bi";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [img, setImg] = useState(product.img);

  const handleSave = () => {
    product.name = name;
    product.price = Number(price);
    product.img = img;
    navigate("/products");
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <BiLeftArrowAlt onClick={() => navigate(-1)} size={30} strokeWidth={1.2} className="cursor-pointer border rounded-full active:scale-97"/>
      <h1 className="text-3xl font-bold"> Edit Product</h1>
      <div className="flex flex-col p-5 gap-2 max-w-md border rounded-xl shadow-lg">
        <img src={img} alt={name} className="w-full h-35 object-cover rounded-lg"/>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border px-3 rounded-lg" placeholder="Product name"/>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="border px-3 rounded-lg" placeholder="Product price"/>
        <input type="text" value={img} onChange={(e) => setImg(e.target.value)} className="border px-3 rounded-lg" placeholder="Image URL"/>
        <button onClick={handleSave} className="bg-green-500 text-white py-3 rounded-lg hover:active-103">Save</button>
        <button onClick={handleSave} className="bg-red-500 text-white py-3 rounded-lg hover:active-103">Delete</button>
      </div>
    </div>
  );
}
export default EditProduct;