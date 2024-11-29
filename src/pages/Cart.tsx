import React from "react";
import { useCart } from "../context/CartContext";

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum: number, item: object) => sum + item.price, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cart.length == 0 ? (
        <h2>
          There are no items in cart yet. Start adding items to your cart{" "}
          <a href="/">Home</a>
        </h2>
      ) : (
        <ul className="divide-y divide-gray-200">
          {cart.map((item: object) => (
            <li
              key={item.id}
              className="flex justify-between items-center py-4"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-500">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
