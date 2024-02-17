// import React from "react";

import { useState } from "react";
import CartItem from "../CartItem";
import Filter from "../Filter";
import AddToCart from "../AddToCart";

export default function Home(props) {
  const { products, categories, handleAddToCart } = props;
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // ! Filter
  const productsToShow =
    selectedCategory === 0
      ? products
      : products.filter((p) => p.categoryId == selectedCategory);
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            <Filter
              categories={categories}
              selectedCategory={selectedCategory}
              handleSelectCategory={handleSelectCategory}
            ></Filter>
          </div>
          <div className="col-md-8">
            <table className="container table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {productsToShow.map((p) => (
                  <tr key={p.id}>
                    <th scope="row">{p.id}</th>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
                    <td>
                      <AddToCart
                        product={p}
                        handleAddToCart={handleAddToCart}
                      ></AddToCart>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
