import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../data/Products";

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
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-md border rounded-xl p-6 shadow-lg">

        <h1 className="text-3xl font-bold mb-6">
          Edit Product
        </h1>

        <img
          src={img}
          alt={name}
          className="w-full h-60 object-cover rounded-lg mb-5"
        />

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Product name"
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Product price"
        />

        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className="w-full border p-3 rounded-lg mb-5"
          placeholder="Image URL"
        />

        <button
          onClick={handleSave}
          className="w-full bg-green-500 text-white py-3 rounded-lg"
        >
          Save
        </button>

      </div>
    </div>
  );
}

export default EditProduct;