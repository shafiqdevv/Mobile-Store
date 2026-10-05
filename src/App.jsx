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
import ShopingCart from "./pages/ShopingCart";
// import Products from "./pages/Products";
import EditProduct from "./pages/EditProduct";
import ProductsList from "./Component/Products";
const darkMode = "bg-gray-900 text-gray-100 transition duration-700";
const lightMode = "bg-gray-100 text-gray-900 transition duration-700";
function App() {
  const [night, setNight] = useState(false);
  function handleNight() {
    setNight((prev) => !prev);
  }
  return (
    <div className={night ? darkMode : lightMode}>
      <NavBar night={night} handleNight={handleNight} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero night={night} />
              <Category /> <Services /> <Billboard1 /> <ProductsList/>
              <Billboard2 /> <Footer night={night} /> <FixedButton/>
            </>
          }
        />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/edit-product/:id" element={<EditProduct />}/>
        <Route path="/buy/:id" element={<div>Buy Page</div>}/>
        <Route path="/loginForm" element={<LoginForm  />}/>
        <Route path="/shopingCart" element={<ShopingCart/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </div>
  );
}
export default App;
