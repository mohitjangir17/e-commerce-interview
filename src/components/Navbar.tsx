import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar: React.FC = () => {
  const { cart } = useCart();
  return (
    <nav>
      <Link className="mx-2" to="/">
        Home
      </Link>
      <Link className="mx-2" to="/cart">
        Cart {cart.length === 0 ? `` : `(${cart.length})`}
      </Link>
    </nav>
  );
};

export default Navbar;
