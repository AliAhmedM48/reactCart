import React from "react";

export default function AddToCart(props) {
  const { product, handleAddToCart } = props;
  console.log(product);
  return (
    <>
      <button className="btn" onClick={() => handleAddToCart(product)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill={product.inCart ? "fill" : "none"}
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-8 2a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
          />
        </svg>
      </button>
    </>
  );
}
