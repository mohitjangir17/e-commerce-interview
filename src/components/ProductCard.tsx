import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-cover mb-4"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-500">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="mt-4 block bg-blue-500 text-white text-center px-4 py-2 rounded hover:bg-blue-600"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
