import React from "react";

export default function Filter(props) {
  const { categories, selectedCategory, handleSelectCategory } = props;
  console.log(selectedCategory);
  return (
    <>
      <ul className="list-group">
        {categories.map((cat) => (
          <li
            onClick={() => handleSelectCategory(cat.id)}
            key={cat.id}
            className={`list-group-item cursor-pointer
            ${cat.id == selectedCategory ? "bg-gray-800 text-white" : ""}`}
          >
            {cat.name}
          </li>
        ))}
        {/* <li className="list-group-item">A second item</li> */}
        {/* <li className="list-group-item">A third item</li> */}
        {/* <li className="list-group-item">A fourth item</li> */}
        {/* <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
  );
}
