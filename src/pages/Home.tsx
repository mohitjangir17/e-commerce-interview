import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(response.data);
    };

    const fetchProducts = async () => {
      const category = searchParams.get("category");
      const url = "https://fakestoreapi.com/products/";
      const response = await axios.get(
        `${category ? `${url}/category/${category}` : `${url}`}`
      );
      setProducts(response.data);
    };
    fetchCategories();
    fetchProducts();
  }, [searchParams]);

  const handleFilter = (category: string) => {
    searchParams.set("category", category);
    setSearchParams(searchParams);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product Listing</h1>
      <div className="mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className="bg-blue-500 text-white px-4 py-2 rounded m-2 hover:bg-blue-600"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
