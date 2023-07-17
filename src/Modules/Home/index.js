import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero";
import StatCard from "../../Components/StatCard";
import ProductCard from "../../Components/ProductCard";
import Categories from "../../Components/Categories";
import Products from "../Products";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const respone = await fetch("https://fakestoreapi.com/products?limit=12");
      const data = await respone.json();
      console.log('Module products:',data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <Categories />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">
          Products
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Most recent products
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading......</div>
      )}

      <Products/>
      <StatCard />
    </>
  );
};

export default Home;
