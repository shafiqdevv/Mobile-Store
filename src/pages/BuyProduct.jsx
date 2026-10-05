import { useNavigate, useParams } from "react-router-dom";
import products from "../data/Products";

function BuyProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const savedProducts =
    JSON.parse(localStorage.getItem("products")) || products;

  const product = savedProducts.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Product not found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8">

      <div className="w-full max-w-md border rounded-xl p-6 shadow-lg">

        <img
          src={product.img}
          alt={product.name}
          className="w-full h-72 object-cover rounded-lg"
        />

        <h1 className="text-3xl font-bold mt-5">
          {product.name}
        </h1>

        <p className="text-2xl mt-3">
          ${product.price}
        </p>

        <button
          onClick={() => navigate("/products")}
          className="w-full mt-6 bg-green-500 text-white py-3 rounded-lg"
        >
          Confirm Buy
        </button>

      </div>

    </div>
  );
}

export default BuyProduct;