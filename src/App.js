import Footer from "./Components/Footer";
import Header from "./Components/Header";

import Home from "./Modules/Home";
import { Route,Routes } from "react-router-dom";
import Product from "./Modules/Product";
import Products from "./Modules/Products";
import CategoryProducts from "./Modules/CategoryProduct";



export default function App() {
  return (
    <>
      <Header />
      
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/categories/:name" element={<CategoryProducts/>} />
        <Route path="/contact" element={<div>Contact Form</div>} />
        <Route path="/about" element={<div>About section</div>} />
        <Route path="*" element={<div>404</div>} />
        </Routes>
        
      
      <Footer />
    </>
  );
}
