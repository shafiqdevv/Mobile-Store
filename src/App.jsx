import { useEffect, useState } from "react";
import NavBar from "./Component/NavBar";
import Category from "./Component/Category";
import Services from "./Component/Services";
import Billboard1 from "./Component/Billboard1";
import Billboard2 from "./Component/Billboard2";
import Footer from "./Component/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Hero from "./Component/Hero";
import FixedButton from "./Component/FixedButton";
import LoginForm from "./pages/LoginForm";
import Page404 from "./pages/Page404";
import EditProduct from "./pages/EditProduct";
import Cart from "./pages/Cart";
import products from "./data/Products";
import AddForm from "./pages/AddForm";
import ProtectedRoute from "./Component/ProtectedRoute";
import ProductsList from "./Component/ProductsList";
const darkMode = "bg-gray-900 text-gray-100 transition duration-700";
const lightMode = "bg-gray-100 text-gray-900 transition duration-700";
function App() {
  const [night, setNight] = useState(() => {
  return localStorage.getItem("theme") === "dark"});
  useEffect(() => {
  localStorage.setItem("theme", night ? "dark" : "light");
}, [night]);
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
  const location = useLocation();
  const hideNavBar = location.pathname === '/loginForm' || location.pathname === '/addForm' || location.pathname.startsWith('/edit-product/')
  return (
    <div className={night ? darkMode : lightMode}>
      {!hideNavBar && (<NavBar night={night} handleNight={handleNight} countBuy={countBuy} search={search} setSearch={setSearch}/>)}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero night={night} />
              <Category setCategory={setCategory}/> <Services /> <Billboard1 /> <ProductsList category={category} night={night} filteredProducts={filteredProducts} setCategory={setCategory}/>
              <Billboard2 /> <Footer night={night} /> <FixedButton/>
            </>
          }
        />
        <Route path="/edit-product/:id" element={<EditProduct />}/>
        <Route path="/cart" element={
          <ProtectedRoute>
            <Cart setCountBuy={setCountBuy}/>
          </ProtectedRoute>
        }/>
        <Route path="/loginForm" element={<LoginForm  />}/>
        <Route path="/addForm" element={<AddForm/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </div>
  );
}
export default App;
