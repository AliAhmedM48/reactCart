import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const { itemsInCart } = props;
  console.log(itemsInCart);
  return (
    <>
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo on the right */}
          <div className="flex items-center justify-end">
            <NavLink to="/" className="text-white text-lg font-bold mr-4">
              MyApp
            </NavLink>
          </div>

          {/* Nav list centered */}
          <div className="flex-grow text-center">
            <ul className="flex justify-center space-x-6">
              <li>
                <NavLink
                  lin
                  to="/"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product/5?name=Ali Ahmed"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  Product
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Icon cart */}
          {/* <div className="flex items-center">
            <NavLink to="/cart" className="text-white hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 10V6a2 2 0 012-2h2a2 2 0 012 2v4m0 0v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8m4 0h6m-6 0a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
            </NavLink>
          </div>
           */}

          <div className="">
            <NavLink
              to="/cart"
              className="relative text-white hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-8 2a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                />
              </svg>
              {itemsInCart > 0 && (
                <span className="bg-red-500 text-white rounded-full px-1 text-xs py-0.5 absolute top-4 -right-1">
                  {itemsInCart}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
