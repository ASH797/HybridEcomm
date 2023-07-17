import React, { useState, useEffect } from "react";
import FeatureCard from "../FeatureCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = () =>
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((json) => {
          console.log("categories", json);
          setCategories(json);
        })
        .catch((err) => {
          console.log(err);
        });

    fetchCategories();
  }, []);

  if (categories.length === 0) return <div>Loading.....</div>;

  return  <FeatureCard cards={categories} />;
};

export default Categories;
