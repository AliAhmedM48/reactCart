import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import NotFound from "./components/pages/NotFound";
import Navbar from "./components/Navbar";
import Cart from "./components/pages/Cart";
import { useState } from "react";

const router = createBrowserRouter([
  { path: "/", element: <Home></Home> },
  { path: "/Product/:id", element: <Product></Product> },
  { path: "**", element: <NotFound></NotFound> },
]);

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      categoryId: 1,
      name: "Classic Cheeseburger",
      price: 8.99,
      inCart: false,
      count: 1,
    },
    {
      id: 2,
      categoryId: 1,
      name: "Bacon BBQ Burger",
      price: 9.99,
      inCart: false,
      count: 1,
    },
    {
      id: 3,
      categoryId: 4,
      name: "Grilled Chicken Sandwich",
      price: 7.99,
      inCart: false,
      count: 1,
    },
    {
      id: 4,
      categoryId: 4,
      name: "Spicy Crispy Chicken",
      price: 8.49,
      inCart: false,
      count: 1,
    },
    {
      id: 5,
      categoryId: 3,
      name: "Vegetarian Burger",
      price: 7.49,
      inCart: false,
      count: 1,
    },
    {
      id: 6,
      categoryId: 1,
      name: "Classic Cheeseburger",
      price: 8.99,
      inCart: false,
      count: 1,
    },
    {
      id: 7,
      categoryId: 1,
      name: "Bacon BBQ Burger",
      price: 9.99,
      inCart: false,
      count: 1,
    },
    {
      id: 8,
      categoryId: 2,
      name: "French Fries",
      price: 3.49,
      inCart: false,
      count: 1,
    },
    {
      id: 9,
      categoryId: 2,
      name: "Sweet Potato Fries",
      price: 4.99,
      inCart: false,
      count: 1,
    },
    {
      id: 10,
      categoryId: 3,
      name: "Bottled Water",
      price: 1.99,
      inCart: false,
      count: 1,
    },
  ]);
  const [categories, setCategories] = useState([
    //#region
    { id: 0, name: "All" },
    { id: 1, name: "Burger" },
    { id: 4, name: "Chicken" },
    { id: 2, name: "Fries" },
    { id: 3, name: "Water" },
    //#endregion
  ]);

  const handleAddToCart = (product) => {
    //#region
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === product.id);
    newProducts[index] = { ...newProducts[index] };

    newProducts[index].inCart = !newProducts[index].inCart;
    setProducts(newProducts);
    //#endregion
  };

  let handleReset = () => {
    //#region
    // * Clone
    let newData = [...products];
    // * edit
    newData = newData.map((product) => ({ ...product, inCart: false }));
    // * set State
    setProducts(newData);
    //#endregion
  };

  let handleIncrement = (selectedProduct) => {
    console.log(selectedProduct);
    //#region
    // * Clone
    let newData = [...products];
    let index = newData.findIndex(
      (product) => product.name == selectedProduct.name
    );
    // * edit
    newData[index].count = newData[index].count + 1;
    // * set State
    setProducts(newData);
    //#endregion
  };

  let handleDecrement = (selectedProduct) => {
    //#region
    // * Clone
    let newData = [...products];
    let index = newData.findIndex(
      (product) => product.name == selectedProduct.name
    );
    // * edit
    newData[index].count =
      newData[index].count == 1 ? 1 : newData[index].count - 1;
    // * set State
    setProducts(newData);
    //#endregion
  };

  let handleDelete = (selectedProduct) => {
    //#region
    // * Clone
    // let newData = products.filter(
    //   (product) => product.name !== selectedProduct.name
    // let newData = products.map((product) => {
    //   if (product.name !== selectedProduct.name) product.inCart = false;
    // });
    // // * set State
    // setProducts(newData);
    // * Clone
    let newData = [...products];
    let index = newData.findIndex(
      (product) => product.name == selectedProduct.name
    );
    // * edit
    newData[index].inCart = false;
    // * set State
    setProducts(newData);

    //#endregion
  };

  if (!products.length) return <h1>No Data</h1>;

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Navbar itemsInCart={products.filter((p) => p.inCart).length}></Navbar>
        <Routes>
          <Route
            index
            element={
              <Home
                products={products}
                categories={categories}
                handleAddToCart={handleAddToCart}
              ></Home>
            }
          />
          <Route path="/product/:id" element={<Product></Product>} />
          <Route
            path="/cart"
            element={
              <Cart
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleDelete={handleDelete}
                handleReset={handleReset}
                products={products.filter((p) => p.inCart)}
              ></Cart>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
