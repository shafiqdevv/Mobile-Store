
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
  ShieldCheck,
  LockKeyhole,
} from "lucide-react";

import products from "../data/Products";

function Cart({ night, setCountBuy }) {
  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    return savedCart.map((item) => {
      const latestProduct = products.find(
        (product) =>
          product.id === item.id && product.name === item.name
      );

      return {
        ...(latestProduct || {}),
        ...item,
        quantity: item.quantity || 1,
      };
    });
  });

  // Save cart and update navbar count
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    const totalQuantity = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );

    setCountBuy?.(totalQuantity);
  }, [cart, setCountBuy]);

  // Increase quantity
  function increaseQuantity(id, name) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  // Decrease quantity
  function decreaseQuantity(id, name) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.name === name
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  }

  // Remove product
  function removeProduct(id, name) {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.id === id && item.name === name)
      )
    );
  }

  // Calculations
  const totalProducts = cart.length;

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalSavings = cart.reduce(
    (total, item) =>
      total +
      Math.max(0, (item.oldPrice || item.price) - item.price) *
        item.quantity,
    0
  );

  const shipping = 0;
  const totalPrice = subtotal + shipping;

  const formatPrice = (price) =>
    `$${Number(price).toFixed(2)}`;

  const pageStyle = night
    ? "bg-[#17151f] text-white"
    : "bg-[#faf9ff] text-gray-900";

  const cardStyle = night
    ? "bg-[#242130] border-gray-700"
    : "bg-white border-gray-100";

  return (
    <div className={`min-h-screen px-4 sm:px-8 lg:px-14 py-10 ${pageStyle}`}>

      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Shopping Cart
          </h1>

          <p className="text-sm text-gray-400 mt-2">
            You have {totalItems} items in your cart
          </p>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-purple-500 hover:text-purple-700 transition"
        >
          <ArrowLeft size={18} />
          <span className="hidden sm:block">Continue Shopping</span>
        </button>
      </div>

      {cart.length === 0 ? (
        /* Empty Cart */
        <div className="flex flex-col items-center justify-center py-24">
          <ShoppingBag size={75} className="text-purple-300 mb-5" />

          <h2 className="text-2xl font-bold mb-2">
            Your cart is empty
          </h2>

          <p className="text-gray-400 mb-6">
            Looks like you haven't added anything yet.
          </p>

          <button
            onClick={() => navigate(-1)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl transition"
          >
            Start Shopping
          </button>
        </div>
      ) : (

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-8 items-start">

          {/* Products */}
          <div className="flex flex-col gap-4">

            {cart.map((product, index) => (
              <motion.div
                key={`${product.id}-${product.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`border rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-5 ${cardStyle}`}
              >

                {/* Product Image */}
                <div className="w-full sm:w-32 h-36 sm:h-32 shrink-0 rounded-xl bg-gray-100 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 w-full">
                  <h3 className="font-semibold text-lg">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-purple-600 font-bold text-lg">
                      {formatPrice(product.price)}
                    </span>

                    {product.oldPrice > product.price && (
                      <span className="text-gray-400 line-through text-sm">
                        {formatPrice(product.oldPrice)}
                      </span>
                    )}
                  </div>

                  {product.rate && (
                    <div className="flex items-center gap-1 mt-2 text-yellow-500 text-sm">
                      ★ {product.rate}
                    </div>
                  )}

                  <p className="text-xs text-gray-400 mt-2">
                    {product.category || "Product"}
                  </p>
                </div>

                {/* Quantity and Remove */}
                <div className="flex items-center justify-between sm:justify-end gap-5 w-full sm:w-auto">

                  <div className="flex items-center gap-3 border border-purple-200 rounded-lg px-2 py-2">
                    <button
                      onClick={() =>
                        decreaseQuantity(product.id, product.name)
                      }
                      disabled={product.quantity <= 1}
                      className="text-purple-600 disabled:opacity-30 hover:scale-110 transition"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="font-semibold min-w-5 text-center">
                      {product.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(product.id, product.name)
                      }
                      className="text-purple-600 hover:scale-110 transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      removeProduct(product.id, product.name)
                    }
                    className="text-gray-400 hover:text-red-500 transition"
                    title="Remove product"
                  >
                    <Trash2 size={19} />
                  </button>
                </div>

                {/* Item Total */}
                <div className="sm:w-24 text-right">
                  <p className="text-xs text-gray-400">Total</p>

                  <p className="font-bold text-purple-600 mt-1">
                    {formatPrice(product.price * product.quantity)}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

          {/* Order Summary */}
          <motion.aside
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            className={`rounded-2xl border p-6 xl:sticky xl:top-24 ${cardStyle}`}
          >

            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center">
                <ShoppingBag className="text-purple-600" size={22} />
              </div>

              <h2 className="text-xl font-bold">
                Order Summary
              </h2>
            </div>

            {/* Summary Details */}
            <div className="flex flex-col gap-5">

              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Total Products</span>
                <span className="font-semibold">{totalProducts}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Total Items</span>
                <span className="font-semibold">{totalItems}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Subtotal</span>
                <span className="font-semibold">
                  {formatPrice(subtotal)}
                </span>
              </div>

              {totalSavings > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">You Save</span>
                  <span className="text-purple-600 font-semibold">
                    -{formatPrice(totalSavings)}
                  </span>
                </div>
              )}

              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Shipping</span>
                <span className="text-green-500 font-semibold">
                  Free
                </span>
              </div>

              <div className="border-t border-dashed border-gray-300 my-1" />

              <div>
                <p className="text-sm text-gray-400 mb-2">
                  Total Price
                </p>

                <h2 className="text-3xl font-bold text-purple-600">
                  {formatPrice(totalPrice)}
                </h2>
              </div>

              {/* Checkout */}
              <button
                onClick={() =>
                  alert("Checkout functionality coming soon!")
                }
                className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-4 rounded-xl transition flex items-center justify-center gap-2"
              >
                <LockKeyhole size={17} />
                Checkout
              </button>

              {/* Security */}
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                <ShieldCheck size={16} className="text-purple-500" />
                Secure & Encrypted Checkout
              </div>

            </div>
          </motion.aside>

        </div>
      )}
    </div>
  );
}

export default Cart;