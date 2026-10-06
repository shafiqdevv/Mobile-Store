import { useState } from "react";
import NavBar from "./Component/NavBar";
import Category from "./Component/Category";
import Services from "./Component/Services";
import Billboard1 from "./Component/Billboard1";
import Billboard2 from "./Component/Billboard2";
import Footer from "./Component/Footer";
import { Route, Routes } from "react-router-dom";
import Hero from "./Component/Hero";
import FixedButton from "./Component/FixedButton";
import LoginForm from "./pages/LoginForm";
import Page404 from "./pages/Page404";
import EditProduct from "./pages/EditProduct";
import ProductsList from "./Component/ProductsList";
import Cart from "./pages/Cart";
import products from "./data/Products";
const darkMode = "bg-gray-900 text-gray-100 transition duration-700";
const lightMode = "bg-gray-100 text-gray-900 transition duration-700";
function App() {
  const [night, setNight] = useState(false);
  const [countBuy, setCountBuy] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved).length : 0
  });
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState("all");
  const filteredProducts = products.filter(product => {
    const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'all' || product.category === category;
    return matchSearch && matchCategory;
  })
  function handleNight() {
    setNight((prev) => !prev);
  }
  return (
    <div className={night ? darkMode : lightMode}>
      <NavBar night={night} handleNight={handleNight} countBuy={countBuy} search={search} setSearch={setSearch}/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero night={night} />
              <Category /> <Services /> <Billboard1 /> <ProductsList night={night} filteredProducts={filteredProducts} setCategory={setCategory}/>
              <Billboard2 /> <Footer night={night} /> <FixedButton/>
            </>
          }
        />
        <Route path="/edit-product/:id" element={<EditProduct />}/>
        <Route path="/cart" element={<Cart setCountBuy={setCountBuy}/>}/>
        <Route path="/loginForm" element={<LoginForm  />}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </div>
  );
}
export default App;
