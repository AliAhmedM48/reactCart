const CartItem = (props) => {
  const { product, handleIncrement, handleDecrement, handleDelete } = props;
  console.log(product);

  return (
    <div className="flex items-center justify-between border-b border-gray-300 py-2">
      <div className="flex items-center">
        <div className="mr-2">{product.name}</div>
        <div className="mr-2">
          Qty:{" "}
          <span className="badge bg-gray-800 text-white">{product.count}</span>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={() => handleDecrement(product)}
        >
          -
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center ml-2"
          onClick={() => handleIncrement(product)}
        >
          +
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center ml-2"
          onClick={() => handleDelete(product)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1.414-9.414a1 1 0 0 1 1.414 0L10 10.586l1.414-1.414a1 1 0 0 1 1.414 1.414L11.414 12l1.414 1.414a1 1 0 0 1-1.414 1.414L10 13.414l-1.414 1.414a1 1 0 0 1-1.414-1.414L8.586 12 7.172 10.586a1 1 0 0 1 0-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
