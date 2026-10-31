
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const off = {
  id: 2,
  name: "Phoenix",
  price: "500",
  img: "/billboard (2).png",
  off: "30% OFF",
  kind: "off",
};

function Billboard2() {
  const navigate = useNavigate();

  function handleBuy(off) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const alreadyExists = cart.find((item) => item.id === off.id);

    if (!alreadyExists) {
      cart.push(off);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mx-3 md:mx-8 lg:mx-15 my-15 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 rounded-3xl bg-red-700 text-white shadow-lg"
    >
      {/* Left section */}
      <div className="relative z-10 m-4 md:m-5 lg:m-8">
        <p className="text-sm">30% OFF</p>

        <h1 className="text-5xl font-bold">
          FINE <br /> SMILE
        </h1>

        <div className="flex items-center justify-between gap-3">
          <p className="font-thin text-gray-100">
            10 jan to 28 jan
          </p>

          <button
            onClick={() => handleBuy(off)}
            className="mt-3 rounded-full bg-white px-4 py-1 text-sm text-red-700 cursor-pointer md:hidden"
          >
            Shop
          </button>
        </div>
      </div>

      {/* Right section */}
      <div className="relative z-10 hidden md:block m-5 lg:m-8">
        <p className="text-lg font-bold">Air Solo Bass</p>

        <h2 className="text-4xl font-bold">
          Winter Sale
        </h2>

        <p className="mt-2 w-full max-w-md text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Delectus amet.
        </p>

        <button
          onClick={() => handleBuy(off)}
          className="mt-3 rounded-full bg-white px-4 py-1 text-sm text-red-700 cursor-pointer"
        >
          Shop
        </button>
      </div>

      {/* Product image */}
      <img
        src="/billboard (2).png"
        alt="Phoenix headphones"
        className="pointer-events-none absolute right-2 top-[-15px] z-0 w-32 object-contain sm:right-8 sm:w-36 md:right-[45%] md:top-[-20px] md:w-44 lg:right-[48%] lg:w-52"
      />
    </motion.div>
  );
}

export default Billboard2;
