import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../data/Products";
import GoBack from "../Component/GoBack";
import { IoIosCheckmark } from "react-icons/io";
import { MdDelete } from "react-icons/md";

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
      <GoBack/>
      <h1 className="text-3xl font-bold"> Edit Product</h1>
      <div className="rounded-xl p-3 shadow-lg flex flex-col gap-5">
        <img src={img} alt={name} className="w-full h-35 object-cover rounded-lg"/>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border-2 border-gray-300 shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)] focus:outline-none focus:border-gray-500 py-1 px-3 rounded-md" placeholder="Product name"/>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="border-2 border-gray-300 shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)] focus:outline-none focus:border-gray-500 py-1 px-3 rounded-md" placeholder="Product price"/>
        <input type="text" value={img} onChange={(e) => setImg(e.target.value)} className="border-2 border-gray-300 shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)] focus:outline-none focus:border-gray-500 py-1 px-3 rounded-md" placeholder="Image URL"/>
        <div className="flex gap-3 justify-end">
          <IoIosCheckmark onClick={handleSave} size={30} className="border-2 p1 rounded-full"/>
          <MdDelete size={30} className="border-2 p-1 rounded-full"/>
        </div>
      </div>
    </div>
  );
}
export default EditProduct;