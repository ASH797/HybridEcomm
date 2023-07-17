import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard";

const CategoryProducts = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = () => {
      fetch(`https://fakestoreapi.com/products/category/${name}`)
        .then((res) => res.json())
        .then((json) => setProducts(json))
        .catch(console.error());
      console.log("I am in category"); 
    };
    fetchCategoryProducts();
  }, [name]);

  if (products.length === 0) return <div>Loading....</div>;

  return (
    
      <ProductCard products={products} />
    
  );
};

export default CategoryProducts;
