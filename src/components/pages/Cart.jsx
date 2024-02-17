import React from "react";
import CartItem from "../CartItem";
import { useNavigate } from "react-router-dom";

export default function Cart(props) {
  const {
    products,
    handleIncrement,
    handleDecrement,
    handleDelete,
    handleReset,
  } = props;
  console.log(products);
  const navigate = useNavigate();

  return (
    <>
      <div className="container w-1/2 mt-4">
        {products.length === 0 ? (
          <div className="text-center">
            <h1 className="mb-5 text-center text-red-600 font-bold">
              No Items
            </h1>
            <button
              onClick={() => navigate("/")}
              className="bg-transparent border-2 border-gray-800 hover:bg-gray-800 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              Go to select items
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between border-b border-gray-300 py-2 mb-4">
              <h2 className="text-lg font-bold">Items in Cart</h2>
              <button
                onClick={handleReset}
                className="bg-gray-800 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
              >
                Reset Cart
              </button>
            </div>
            {products.map((p) => (
              <CartItem
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleDelete={handleDelete}
                key={p.id}
                product={p}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
}
